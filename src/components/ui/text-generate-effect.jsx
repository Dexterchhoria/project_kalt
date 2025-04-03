"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "../../lib/utils";

const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  font = "pixel", // Add a font prop to control which font to use (PixelDigivolve or Osake)
  loop = true, // Add loop prop to control looping behavior
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  
  useEffect(() => {
    // If looping is enabled, animate the text repeatedly
    const animationSequence = async () => {
      while (loop) {
        await animate("span", {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        }, {
          duration: duration ? duration : 1,
          delay: stagger(0.08),
        });

        // After one animation cycle, reverse it (or add any other desired behavior)
        await animate("span", {
          opacity: 0,
          filter: filter ? "blur(10px)" : "none",
        }, {
          duration: duration ? duration : 1,
          delay: stagger(0.08),
        });
      }
    };

    // Call the animation function
    animationSequence();
  }, [scope.current, loop]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`opacity-0 ${font === "pixel" ? "text PixelDigivolve" : "text-osake"}`} // Conditional font class
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}>
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-black dark:text-white text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;
