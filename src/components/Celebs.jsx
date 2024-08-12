import React from "react";
import axios from "../utils/axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Topnav from "./partials/Topnav";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./partials/Cards";

const Celebs = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("popular");
  const [celebs, setcelebs] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "MovieApp | Celebs";

  const getCelebs = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);

      if (data.results.length > 0) {
        setcelebs((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error:" + error);
    }
  };

  const refreshHandler = () => {
    if (celebs.length === 0) {
      getCelebs();
    } else {
      setpage(1);
      setcelebs([]);
      getCelebs();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return celebs.length > 0 ? (
    <div className="w-screen h-[100%] ">
      <div className="celebstop w-full flex items-center justify-evenly text-white">
        <div className=" w-[25%] h-[8vh] flex items-center justify-center gap-[2.5vmax]">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-3xl cursor-pointer hover:text-[#6556CD] duration-200"
          ></i>
          <h1 className="text-[1.4vmax]">
            Celebs
            <i className="ri-user-star-fill ml-1 text-[#6556CD]"></i>
          </h1>
        </div>
        <div className="w-[75%] flex items-center justify-evenly">
          <Topnav />
        </div>
      </div>
      <InfiniteScroll
        dataLength={celebs.length}
        next={getCelebs}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={celebs} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Celebs;
