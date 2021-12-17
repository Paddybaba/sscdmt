import React from "react";
import Navbar from "../components/TopBar";
import { Image } from "react-bootstrap";
import Footer from "../components/Footer";
const contact = () => {
  var saibaba =
    "https://live.staticflickr.com/65535/51537856857_a459c3a29c_m.jpg";
  return (
    <>
      <div className="container-fluid gx-0">
        <div className="row gx-0">
          <div className="col-12 mx-auto">
            <Navbar />
            <div className="curved-image">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                style={{ marginBottom: "-2", width: "100%" }}
              >
                <path
                  fill="#fff"
                  fill-opacity="1"
                  d="M0,96L48,112C96,128,192,160,288,192C384,224,480,256,576,261.3C672,267,768,245,864,245.3C960,245,1056,267,1152,261.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="row gx-0">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-sm-6 address-box">
                    <div className="d-flex flex-row align-items-start mb-4">
                      {/* <Image src={saibaba} className="logo" fluid /> */}
                      <h3 className="fs-1 ">Shri Sai Clinic</h3>
                    </div>
                    <h5> Near Laxminiwas Chowk, Gokulpur, Dhamtari</h5>
                    <h5>
                      Phone : <a href="tel:9343918036">9343918036</a>
                    </h5>
                    <h5>Website : www.shrisaiclinic.com</h5>
                    <h5>email : shrisaiclinic@gmail.com</h5>
                  </div>
                  <div className="col-sm-6 map-container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24394.479970260018!2d81.53773423615553!3d20.68916148083833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2f27f756dccbf5%3A0x15ed9c3cffd79d87!2sShri%20Sai%20Clinic%2C%20Dhamtari!5e0!3m2!1sen!2sin!4v1639658536534!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      allowfullscreen=""
                      loading="lazy"
                      style={{ borderRadius: "5px" }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default contact;
