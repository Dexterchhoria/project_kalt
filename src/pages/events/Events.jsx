import React from "react";
import bgImg from "../../assets/bgImg2.jpeg";
const Events = () => {
  return (
    <div>
      <div
        className="h-screen flex text flex-col items-center justify-center text-white text-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text  inline-block text-center">
          <h1 className="text-4xl md:text-8xl font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] px-4 relative z-10">
            Coming Soon...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Events;
