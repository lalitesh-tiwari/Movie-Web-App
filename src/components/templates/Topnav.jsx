import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [searchQuery, setsearchQuery] = useState("");

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center text-white">
      <i className="ri-search-2-line text-2xl ml-[15%]"></i>
      <input
        onChange={(e) => setsearchQuery(e.target.value)}
        value={searchQuery}
        type="text"
        placeholder="Search Anything..."
        className="w-[50%] outline-none border border-[#6556CD] p-2 rounded-lg bg-transparent mx-5"
      />
      {searchQuery.length > 0 && (
        <i
          onClick={() => setsearchQuery("")}
          className="ri-close-large-line text-2xl"
        ></i>
      )}
      <div className="absolute w-[50%] max-h-[45vh] overflow-auto top-[81%] left-[18.5%] rounded-lg bg-[#6556CD] text-black">
        {/* <Link className="w-full flex justify-start items-center font-semibold border-b border-black/40 p-10 hover:bg-white/85 hover:text-[#6556CD] duration-200">
          <img src="" />
          <span>Hello Everyone..</span>
        </Link> */}
      </div>
    </div>
  );
};

export default Topnav;
