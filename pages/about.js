import React from "react";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
const about = () => {
  return (
    <>
      <div className="container-fluid gx-0 about">
        <TopBar />
        <div className="row gx-0">
          <div className="col-10 mx-auto mt-2">
            <div className="row mx-auto">
              <div className="col-sm-6 order-sm-1">
                <h3 className="text-center m-4">About Us</h3>
                <p>
                  We have started this polyclinic to provide services to
                  patients from our city who are not able to visit hospitals
                  during day time due to their jobs and other work. We are a
                  group of specialist doctors form Pediatrics , Orthopaedics and
                  Psychiatry speciality. This clinic mainly provides OPD
                  consultation service in the above mentioned specialities.
                </p>
                <p>We started this clinic in October - 2021. </p>
              </div>
              <div className="col-sm-6 box order-sm-2"></div>
            </div>
          </div>
        </div>
        <div className="fixed-bottom ">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default about;
