import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-full bg-black flex items-center justify-center text-white">
      <h1 className="text-[4vmax]">
        <i className="ri-movie-2-fill text-[#6556CD] font-thin"></i>
        Loading...
      </h1>
    </div>
  );
};

export default Loader;
