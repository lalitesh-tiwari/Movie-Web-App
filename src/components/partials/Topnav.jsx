import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.png";

const Topnav = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [searches, setsearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${searchQuery}`);
      setsearches(data.results);
    } catch (error) {
      console.log("Error:" + error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [searchQuery]);

  return (
    <div className="w-[50%] h-[8vh] relative flex justify-start items-center text-white">
      <i className="ri-search-2-line text-2xl ml-[5%]"></i>
      <input
        onChange={(e) => setsearchQuery(e.target.value)}
        value={searchQuery}
        type="text"
        placeholder="Search Anything..."
        className="w-[80%] outline-none border border-white/30 p-2 rounded-lg bg-transparent mx-5"
      />
      {searchQuery.length > 0 && (
        <i
          onClick={() => setsearchQuery("")}
          className="ri-close-large-line text-2xl cursor-pointer"
        ></i>
      )}
      <div className="absolute w-[80%] max-h-[50vh] overflow-auto top-[81%] left-[12%] rounded-lg bg-[#6556CD] text-black">
        {searches.map((s, i) => (
          <Link
            key={i}
            className="w-full flex justify-start items-center gap-3 font-semibold border-b border-black/40 p-2 hover:bg-white/85 hover:text-[#6556CD] duration-200"
          >
            <img
              className="w-[8vw] h-[20vh] object-cover rounded"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
            />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
