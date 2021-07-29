import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";

import Footer from "../components/_App/Footer";
import Link from "next/link";

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
          <h2>Working as a team. </h2>
          <br />
          <br />
          <br />
          <p>
            In an ever increasingly demanding world. Our lives place strain on
            our bodies in various ways. To overcome these, we have teamed up
            with the best local allied health teams, to work together to achieve
            the best health outcomes for you. <br />
            <br />
            We are closely associated with Dental, Optometry, Physiotherapy,
            Osteopathy and Mental health services, to best manage and treat you.
            These can be accessed through subsided visits through care plans
            that you can organise with your doctor, or private referral. These
            teams are specialists in their chosen health fields and by working
            closely with them, we are able to achieve the desired results.
            <br />
            <br /> <br />
            <br />
          </p>
          <div className="row">
            <Link
              passHref={true}
              href="https://www.newportfamilydentist.com.au/
"
            >
              <div className="col-sm-6 col-lg-4">
                <div className="department-item">
                  <i className="icofont-tooth"></i>
                  <h3>Dentistry</h3>
                  {/* <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Praesentium eaque omnis corporis, animi aspernatur tempora.
                  </p> */}
                </div>
              </div>
            </Link>

            <Link
              passHref={true}
              href="https://www.theeyelab.com.au/appointment/"
            >
              <div className="col-sm-6 col-lg-4">
                <div className="department-item">
                  <i class="icofont-eye-alt"></i>
                  <h3>Optometry</h3>
                  {/* <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Praesentium eaque omnis corporis, animi aspernatur tempora.
                  </p> */}
                </div>
              </div>
            </Link>

            {/* <div className="col-sm-6 col-lg-4">
              <div className="department-item">
                <i class="icofont-operation-theater"></i>
                <h3>Chiropractic</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Praesentium eaque omnis corporis, animi aspernatur tempora.
                </p>
              </div>
            </div> */}

            {/* <div className="col-sm-6 col-lg-4">
              <div className="department-item">
                <i class="icofont-brain-alt"></i>
                <h3>Psychology</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Praesentium eaque omnis corporis, animi aspernatur tempora.
                </p>
              </div>
            </div> */}

            <Link
              passHref={true}
              href=" https://podiatrygroupmelbourne.com.au/"
            >
              <div className="col-sm-6 col-lg-4">
                <div className="department-item">
                  <i class="icofont-crutch"></i>
                  <h3>Podiatry</h3>
                  {/* <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Praesentium eaque omnis corporis, animi aspernatur tempora.
                  </p> */}
                </div>
              </div>
            </Link>

            <Link
              passHref={true}
              href=" https://www.avesenna.com.au/
"
            >
              <div className="col-sm-6 col-lg-4">
                <div className="department-item">
                  <i class="icofont-nurse"></i>
                  <h3>Osteopathy</h3>
                  {/* <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Praesentium eaque omnis corporis, animi aspernatur tempora.
                  </p> */}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Departments;
