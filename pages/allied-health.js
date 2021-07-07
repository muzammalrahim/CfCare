import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";

import Footer from "../components/_App/Footer";

const Departments = () => {
  return (
    <React.Fragment>
      <TopHeader />
      <Navbar />
      <PageBanner
        pageTitle="Allied Health"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Allied Health"
        // bgImage="page-title-one"
        opacity="0.6"
        colour="#008000"
      />

      <div className="departments-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="department-item">
                <i className="icofont-tooth"></i>
                <h3>Dentistry</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Praesentium eaque omnis corporis, animi aspernatur tempora.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="department-item">
                <i class="icofont-eye-alt"></i>
                <h3>Optometry</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Praesentium eaque omnis corporis, animi aspernatur tempora.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="department-item">
                <i class="icofont-operation-theater"></i>
                <h3>Chiropractic</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Praesentium eaque omnis corporis, animi aspernatur tempora.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="department-item">
                <i class="icofont-brain-alt"></i>
                <h3>Psychology</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Praesentium eaque omnis corporis, animi aspernatur tempora.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="department-item">
                <i class="icofont-crutch"></i>
                <h3>Podiatry</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Praesentium eaque omnis corporis, animi aspernatur tempora.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="department-item">
                <i class="icofont-nurse"></i>
                <h3>Osteopathy</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Praesentium eaque omnis corporis, animi aspernatur tempora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Departments;
