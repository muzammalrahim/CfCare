import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";

const Services = () => {
  return (
    <React.Fragment>
      <TopHeader />
      <Navbar />
      <PageBanner
        pageTitle="Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services"
        // bgImage="page-title-one"
        opacity="0.6"
        colour="#008000"
      />

      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            {/* <div className="col-sm-6 col-lg-4">
                              <div className="service-item">
                                  <div className="service-front">
                                  <i class="icofont-woman-in-glasses"></i>
                                      <h3>Women's Health</h3>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                  </div>
                                  <div className="service-end">
                                  <i class="icofont-woman-in-glasses"></i>
                                      <h3>Women's Health</h3>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
  
                                      <Link href="/womens-health">
                                          <a>Read More</a>
                                      </Link>
                                  </div>
                              </div>
                          </div>
   */}
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <div className="service-front">
                  <i class="icofont-business-man"></i>
                  <h3>Men's Health</h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p> */}
                </div>
                <div className="service-end">
                  <i class="icofont-business-man"></i>
                  <h3>Men's Health</h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p> */}

                  <Link href="/mens-health">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <div className="service-front">
                  <i class="icofont-labour"></i>
                  <h3>Workcover & TAC</h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p> */}
                </div>
                <div className="service-end">
                  <i class="icofont-labour"></i>
                  <h3>Workcover & TAC</h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p> */}

                  <Link href="/workcover">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <div className="service-front">
                  <i class="icofont-injection-syringe"></i>
                  <h3>Children's Immunisation</h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p> */}
                </div>
                <div className="service-end">
                  <i class="icofont-injection-syringe"></i>
                  <h3>Children's Immunisation</h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p> */}

                  <Link href="/childrens-immunisation">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <div className="service-front">
                  <i class="icofont-airplane-alt"></i>
                  <h3>Travel Vaccines</h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p> */}
                </div>
                <div className="service-end">
                  <i class="icofont-airplane-alt"></i>
                  <h3>Travel Vaccines</h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p> */}

                  <Link href="/travel-vaccines">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <div className="service-front">
                  <i class="icofont-medical-sign"></i>
                  <h3>Allied Health</h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p> */}
                </div>
                <div className="service-end">
                  <i class="icofont-medical-sign"></i>
                  <h3>Allied Health</h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p> */}

                  <Link href="/allied-health">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <div className="service-front">
                  <i class="icofont-icu"></i>
                  <h3>Shared Care</h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p> */}
                </div>
                <div className="service-end">
                  <i class="icofont-icu"></i>
                  <h3>Shared Care</h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p> */}

                  <Link href="/shared-care">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <div className="service-front">
                  <i class="icofont-eye-alt"></i>
                  <h3>Optometry</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
                <div className="service-end">
                  <i class="icofont-eye-alt"></i>
                  <h3>Optometry</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>

                  <Link href="/optometry">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div> */}
            {/* 
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <div className="service-front">
                  <i class="icofont-tooth"></i>
                  <h3>Dentistry</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
                <div className="service-end">
                  <i class="icofont-tooth"></i>
                  <h3>Dentistry</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>

                  <Link href="/dentistry">
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* <div className="expertise-area pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Expertise</h2>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="expertise-item">
                                <div className="row">
                                    <div className="col-sm-6 col-lg-6">
                                        <a href="blog-details.html">
                                            <div className="expertise-inner">
                                                <i className="icofont-doctor-alt"></i>
                                                <h3>Certified Doctors</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <a href="blog-details.html">
                                            <div className="expertise-inner">
                                                <i className="icofont-stretcher"></i>
                                                <h3>Emergency</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <a href="blog-details.html">
                                            <div className="expertise-inner">
                                                <i className="icofont-network"></i>
                                                <h3>Teachnology</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <a href="blog-details.html">
                                            <div className="expertise-inner">
                                                <i className="icofont-ambulance-cross"></i>
                                                <h3>Ambulance</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="expertise-item">
                                <div className="expertise-right">
                                    <img src="/images/about4.jpg" alt="Expertise" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

      <Footer />
    </React.Fragment>
  );
};

export default Services;
