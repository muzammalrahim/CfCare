import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AppointmentFormTwo from "../components/Common/AppointmentFormTwo";
import Footer from "../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <React.Fragment>
      <TopHeader />
      <Navbar />

      <PageBanner
        pageTitle="Dr. Mathew Wilson"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Dr. Mathew Wilson"
        // bgImage="page-title-five"
        opacity="0.6"
        colour="#008000"
      />

      <div className="doctor-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="doctor-details-item doctor-details-left">
                <img src="/images/doctors/matthew.jpg" alt="Doctor" />

                <div className="doctor-details-contact">
                  <h3>Contact info</h3>
                  <ul>
                    <li>
                      <i className="icofont-ui-call"></i>
                      Call: +03 9391 0033
                    </li>
                    <li>
                      <i className="icofont-ui-message"></i>
                      DrMathewWilson@cfcare.com.au
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      471 Melbourne Road, Newport, Melbourne, Victoria 3015
                    </li>
                  </ul>
                </div>

                <div className="doctor-details-work about-item about-right text-center">
                  <img src="/images/about-shape1.png" alt="About" />
                  <h4>Time varies, please go to our online booking</h4>
                  <button class="doctors-details-btn">Book Now</button>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  <div className="doctor-details-biography">
                    <h3>Dr. Mathew Wilson</h3>
                    {/* <p>MBBS in Neurology, PHD in Neurosurgeon</p> */}
                    {/* <p>
                      Sports Medicine, Children’s Health, Chronic Disease
                      Management
                    </p> */}
                  </div>

                  <div className="doctor-details-biography">
                    <h3>Biography</h3>

                    <p>
                      Mathew graduated from the University of Melbourne Medical
                      School after completing a Bachelor of Science. He then
                      went on to complete resident years at St Vincent’s
                      Hospital before undertaking speciality training in general
                      practice. During this time, he completed a Diploma of
                      Children’s Health through the University of Sydney. In
                      2020, he was admitted as a Fellow of the College of
                      General Practitioners.
                    </p>

                    <p>
                      Mathew enjoys all areas of general practice with special
                      interests in:
                    </p>
                    <ul>
                      <li> Sports Medicine</li>
                      <li>Children’s Health</li>
                      <li>Chronic Disease Management</li><br />
                    </ul>

                    <p>
                      Mathew is available for consultations by appointment only;
                      Monday to Friday and alternate Saturdays.
                    </p>

                    <p></p>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>Education</h3>
                    {/* <ul>
                                            <li>PHD Degree in Neurology at University of UCLan School of Medicine Preston (2006)</li>
                                            <li>Master of Neurosurgery at University of University of Exeter Medical School Exeter (2002)</li>
                                        </ul> */}
                    <ul>
                      <li>MD</li>
                      <li>BSc</li>
                      <li>FRACGP</li>
                      <li>DCH</li>
                    </ul>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>Experience</h3>
                    <ul>
                      <li>Sports Medicine</li>
                      <li>Children’s Health</li>
                      <li>Chronic Disease Management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="pb-100">
                <AppointmentFormTwo />
            </div>
     */}
      <Footer />
    </React.Fragment>
  );
};

export default DoctorDetails;
