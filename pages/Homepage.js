import React from "react";
import TopBar from "../components/TopBar";
import MainCarousel from "../components/MainCarousel";
import Departments from "../components/AllDepartments";
import OurDoctors from "../components/doctors/OurDoctors";
import Footer from "../components/Footer";
const Homepage = () => {
  return (
    <div className="container-fluid gx-0">
      <div className="row gx-0">
        <div className="col-12 mx-auto">
          <TopBar />
          <MainCarousel />
          <Departments/>
          <OurDoctors/>
          <Footer/>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
