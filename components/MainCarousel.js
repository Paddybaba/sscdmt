import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Carousel from "react-bootstrap/Carousel";

const MainCarousel = () => {
  const slides = [
    {
      image:
        "https://paddy-photo-bucket.s3.ap-south-1.amazonaws.com/ortho.jpeg",
      tagline: "Keep your bones healthy ",
      department: "Orthopaedics Department",
    },
    {
      image:
        "https://paddy-photo-bucket.s3.ap-south-1.amazonaws.com/psychiatry.jpg",
      tagline: "You deserve better",
      department: "Department of Psychiatry",
    },
    {
      image: "https://live.staticflickr.com/65535/51586290712_96164f80d1_z.jpg",
      tagline: "Every Child is special",
      department: "Paediatrics Department",
    },
  ];
  const tagLines = [
    "You deserve better ",
    "Keep your bones healthy",
    "Every child is special",
  ];
  return (
    <>
      <div className="">
        <Carousel fade interval={5000} controls={false} indicators={false}>
          {slides.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <div>
                  <img className="d-block w-100 p-0" src={item.image} alt="" />
                  <h3 className="carousel-tagline1">{item.tagline}</h3>
                  <div className="carousel-department">{item.department}</div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default MainCarousel;
