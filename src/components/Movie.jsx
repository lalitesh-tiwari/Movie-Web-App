import React from "react";
import axios from "../utils/axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./partials/Cards";

const Movie = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  const [movie, setmovie] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "MovieApp | Movies";

  const getMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);

      console.log(data);
      

      if (data.results.length > 0) {
        setmovie((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error:" + error);
    }
  };

  const refreshHandler = () => {
    if (movie.length === 0) {
      getMovie();
    } else {
      setpage(1);
      setmovie([]);
      getMovie();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return movie.length > 0 ? (
    <div className="w-screen h-[100%] ">
      <div className="movietop w-full flex items-center justify-evenly text-white">
        <div className=" w-[25%] h-[8vh] flex items-center justify-center gap-[2.5vmax]">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-3xl cursor-pointer hover:text-[#6556CD] duration-200"
          ></i>
          <h1 className="text-[1.4vmax]">
            Movies{" "}
            <small className="text-[1vmax] text-white/50">
              ({category.toUpperCase()})
            </small>
            <i className="ri-sparkling-fill ml-1 text-[#6556CD]"></i>
          </h1>
        </div>
        <div className="w-[75%] flex items-center justify-evenly">
          <Topnav />
          <Dropdown
            title="Category"
            options={["top_rated", "popular", "upcoming", "now_playing"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={movie.length}
        next={getMovie}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={movie} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Movie;
