import React from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";

const Home = () => {
  document.title = "MovieApp | HomePage";
  return (
    <>
      <Sidenav />
      <div className="sidebar w-[80%] h-[100%]">
        <Topnav />
      </div>
    </>
  );
};

export default Home;
