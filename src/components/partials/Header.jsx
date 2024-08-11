import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.7)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-[95%] h-[65vh] mx-auto rounded-lg border-2 border-[#6556CD] text-white flex flex-col gap-[0.5vmax] justify-end items-start p-[2.5vmax]"
    >
      <h1 className="text-[3vmax] font-semibold">
        {data.title || data.orginal_title || data.name || data.original_name}
      </h1>
      <p className="w-[65%] text-[0.8vmax]">
        {data.overview.slice(0, 200)}... <Link className="underline">more</Link>
      </p>
      <div className="flex items-center gap-[0.5vmax]">
        <p className="text-[0.9vmax]">
          <i className="text-[#6556CD] text-[1.1vmax] mr-1 ri-calendar-fill"></i>
          {data.release_date}
        </p>
        <p className="text-[0.9vmax]">
          <i className="text-[#6556CD] text-[1.1vmax] mr-1 ri-movie-fill"></i>
          {data.media_type.toUpperCase()}
        </p>
      </div>
      <Link className="w-fit bg-[#6556CD] px-[1vmax] py-[0.5vmax] rounded text-[1vmax]">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
