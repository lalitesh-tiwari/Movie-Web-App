import React from "react";
import axios from "../utils/axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./partials/Cards";

const Tvshows = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("airing_today");
  const [tvshow, settvshow] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "MovieApp | TV Shows";

  const getTvshow = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);

      if (data.results.length > 0) {
        settvshow((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error:" + error);
    }
  };

  const refreshHandler = () => {
    if (tvshow.length === 0) {
      getTvshow();
    } else {
      setpage(1);
      settvshow([]);
      getTvshow();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return tvshow.length > 0 ? (
    <div className="w-screen h-[100%] ">
      <div className="tvtop w-full flex items-center justify-evenly text-white">
        <div className=" w-[25%] h-[8vh] flex items-center justify-center gap-[2.5vmax]">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-3xl cursor-pointer hover:text-[#6556CD] duration-200"
          ></i>
          <h1 className="text-[1.4vmax]">
            TV Shows
            <small className="ml-2 text-[1vmax] text-white/50">
              ({category.toUpperCase()})
            </small>
            <i className="ri-tv-fill ml-1 text-[#6556CD]"></i>
          </h1>
        </div>
        <div className="w-[75%] flex items-center justify-evenly">
          <Topnav />
          <Dropdown
            title="Category"
            options={["top_rated", "popular", "on_the_air", "airing_today"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={tvshow.length}
        next={getTvshow}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={tvshow} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Tvshows;
