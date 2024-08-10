import React from "react";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {
  return (
      <div className="w-[100%] h-[50vh] pl-[2vmax] flex gap-[1vmax] overflow-x-auto text-white">
        {data.map((d, i) => (
          <div
            key={i}
            className="w-[27%] h-ful h-[95%] shrink-0 border-2 border-[#6556CD] p-[0.5vmax] rounded-lg flex flex-col items-start gap-[0.5vmax] bg-zinc-900"
          >
            <img
              className="w-full h-[55%] object-cove rounded"
              src={`https://image.tmdb.org/t/p/original${
                d.backdrop_path || d.poster_path
              }`}
            />
            <h1 className="font-semibold text-[1.5vmax]">
              {d.title || d.name || d.original_title || d.original_name} -
            </h1>
            <p className="text-[0.8vmax] text-white/60">
              {d.overview.slice(0, 150)}...
              <Link className="underline">more</Link>
            </p>
          </div>
        ))}
      </div>

  );
};

export default HorizontalCards;
