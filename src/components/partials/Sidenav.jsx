import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r border-white/20 p-3">
      <h1 className="text-3xl text-white font-bold w-fit mx-auto">
        <span className="text-[#6556CD] mr-1 font-extralight">
          <i className="ri-movie-2-fill"></i>
        </span>
        MovieApp
      </h1>
      <nav className="w-full h-[50%] mt-[2.5vmax] flex flex-col items-start justify-evenly text-white ">
        <h1 className="text-3xl font-bold tracking-wider w-full h-[3.5vmax]">
          Categories
        </h1>
        <Link
          to="/trending"
          className="w-full h-[3.5vmax] text-gray-400 flex items-center gap-1 hover:text-white hover:bg-[#6556CD] rounded-lg pl-2 duration-200"
        >
          <i className="ri-fire-fill"></i>Trendings
        </Link>
        <Link
          to="/popular"
          className="w-full h-[3.5vmax] text-gray-400 flex items-center gap-1 hover:text-white hover:bg-[#6556CD] rounded-lg pl-2 duration-200"
        >
          <i className="ri-sparkling-fill"></i>Populars
        </Link>
        <Link
          to="/movie"
          className="w-full h-[3.5vmax] text-gray-400 flex items-center gap-1 hover:text-white hover:bg-[#6556CD] rounded-lg pl-2 duration-200"
        >
          <i className="ri-movie-fill"></i>Movies
        </Link>
        <Link
          to="/tvshow"
          className="w-full h-[3.5vmax] text-gray-400 flex items-center gap-1 hover:text-white hover:bg-[#6556CD] rounded-lg pl-2 duration-200"
        >
          <i className="ri-tv-fill"></i>Web/Tv Series
        </Link>
        <Link
          to="/celebs"
          className="w-full h-[3.5vmax] text-gray-400 flex items-center gap-1 hover:text-white hover:bg-[#6556CD] rounded-lg pl-2 duration-200"
        >
          <i className="ri-user-star-fill"></i>Celebs
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-white/20 mt-[3vmax]" />
      <nav className="w-full h-[20%] mt-[4vmax] flex flex-col items-start justify-evenly text-white ">
        <h1 className="text-xl font-bold tracking-wider w-full h-[3vmax]">
          Info
        </h1>
        <Link className="w-full h-[3vmax] text-gray-400 flex items-center gap-1 hover:text-white hover:bg-[#6556CD] rounded-lg duration-200">
          <i className="ri-information-2-fill"></i>About Us
        </Link>
        <Link className="w-full h-[3vmax] text-gray-400 flex items-center gap-1 hover:text-white hover:bg-[#6556CD] rounded-lg duration-200">
          <i className="ri-record-mail-line"></i>Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
