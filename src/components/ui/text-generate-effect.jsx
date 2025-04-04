"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "../../lib/utils";

const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 1, // Increased default duration
  font = "pixel",
  loop = true,
}) => {
  const [scope, animate] = useAnimate();
  const animationRef = useRef(null);
  let wordsArray = words.trim().split(/\s+/);

  useEffect(() => {
    // Define the animation sequence
    const animationSequence = async () => {
      // Fade in all words
      await animate("span", {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      }, {
        duration: duration,
        delay: stagger(0.08, { from: 0 }), // Specify starting point
      });
      
      // Pause before fading out (gives time to read)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Fade out all words
      await animate("span", {
        opacity: 0,
        filter: filter ? "blur(10px)" : "none",
      }, {
        duration: duration,
        delay: stagger(0.08, { from: 0 }), // Ensure same starting point
      });
      
      // Wait before next cycle
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Schedule next animation cycle if looping
      if (loop) {
        animationRef.current = requestAnimationFrame(animationSequence);
      }
    };

    // Start animation and store reference
    animationRef.current = requestAnimationFrame(animationSequence);
    
    // Cleanup function
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, duration, filter, loop]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={`word-${idx}`} // More reliable key format
            className={`${font === "pixel" ? "text PixelDigivolve" : "text-osake"}`}
            style={{
              opacity: 0, // Initial state through style
              filter: filter ? "blur(10px)" : "none",
            }}>
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-normal", className)}>
      <div className="mt-4">
        <div className="text-black dark:text-white text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;
