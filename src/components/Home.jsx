import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loader from "./Loader"

const Home = () => {
  document.title = "MovieApp | HomePage";

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomData);
    } catch (error) {
      console.log("Error:" + error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log("Error:" + error);
    }
  };

  useEffect(() => {
    getTrending();
    !wallpaper && getWallpaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="sidebar w-[80%] h-[100%] overflow-y-auto ">
        <Topnav />
        <Header data={wallpaper} />

        <div className="flex items-center justify-between w-[95%] h-[8vh] mt-2 mx-auto text-white">
          <h1 className="text-[1.5vmax] tracking-wider font-semibold ">
            Trending
          </h1>
          <Dropdown
            title="Filter"
            options={["movie", "tv", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>

        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default Home;
