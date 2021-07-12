import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import Link from "next/link";

const options = {
  items: 1,
  loop: true,
  margin: 0,
  nav: true,
  dots: true,
  smartSpeed: 1000,
  autoplay: false,
  autoplayTimeout: 9000,
  autoplayHoverPause: true,
  navText: [
    "<i class='icofont-simple-left'></i>",
    "<i class='icofont-simple-right'></i>",
  ],
};

const HeroSlider = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <React.Fragment>
      {display ? (
        <OwlCarousel
          className="home-slider owl-carousel owl-theme"
          {...options}
        >
          <div className="slider-item slider-item-img">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape">
                      {/* <img
                        src="/images/home-one/home-slider1.png"
                        alt="Shape"
                      /> */}
                    </div>

                    <h1>Complete Family Care Medical Centre</h1>
                    {/* <p>We set a high level of professionalism for both our doctors and staff, with constant training and up to date emergency procedures. We look at and use experiences as a learning curve to improve our practice and delivery of care. Learning and working together as a team to provide the best level of cover to our patients and the locality of Hobson's Bay.</p> */}
                    {/* <p>
                      The Complete Family care was established, 25 years ago,
                      with the purchase of an old nursing home during the summer
                      of 1992. Over the years of working as a team, providing
                      the best level of cover to our patients of Newport as your
                      doctors of choice, we have learned and work together The
                      Team of Complete Family care has learn and work together
                      provide the best level of cover to our patients of Newport
                      as your doctors of choice.
                    </p> */}

                    <div className="common-btn">
                      <Link href="/appointment">
                        <a className="cmn-btn-right">Book Online</a>
                      </Link>
                      <Link href="/services">
                        <a className="cmn-btn-right">Learn More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default HeroSlider;
