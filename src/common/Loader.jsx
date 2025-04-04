import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center bg-[#000] h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-yellow-500"></div>
    </div>
  );
};

export default Loader;
