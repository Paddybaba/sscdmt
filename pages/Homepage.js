import React from "react";
import TopBar from "../components/TopBar";
import MainCarousel from "../components/MainCarousel";
const Homepage = () => {
  return (
    <div className="container-fluid gx-0">
      <div className="row gx-0">
        <div className="col-12 mx-auto">
          <TopBar />
          <MainCarousel />
        </div>
      </div>
    </div>
  );
};
export default Homepage;
