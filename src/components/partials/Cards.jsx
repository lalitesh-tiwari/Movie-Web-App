import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap pl-[3vmax] gap-[3vmax] w-[95%] mt-[2vmax] mx-auto">
      {data.map((c, i) => (
        <Link
          key={i}
          className="w-[12.5vmax] shadow-white/40 shadow-sm rounded-lg text-white"
        >
          <img
            src={`https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path
            }`}
            className="rounded-lg h-[20vmax] object-cover w-full"
          />
          <h1 className="text-white/60 my-[0.25vmax] text-[1vmax] font-semibold">
            {c.title || c.orginal_title || c.name || c.original_name}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
