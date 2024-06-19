import React from "react";
import HeroBanner from "./heroBanner/HeroBanner";
import "./Home.scss";
import Trending from "./trending/trending";
import Popular from "./popular/Popular";
import Toprated from "./topRated/Toprated";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <Toprated />
    </div>
  );
};

export default Home;
