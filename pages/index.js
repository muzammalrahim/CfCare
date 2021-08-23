import React, { useState, useEffect } from "react";

import "reactjs-popup/dist/index.css";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import HeroSlider from "../components/HomeOne/HeroSlider";
import Stats from "../components/HomeOne/Stats";
import AboutSection from "../components/HomeOne/AboutSection";
import Services from "../components/HomeOne/Services";
import OurExpertise from "../components/HomeOne/OurExpertise";
import VideoIntro from "../components/Common/VideoIntro";
import OurDoctors from "../components/Common/OurDoctors";
import LatestBlogPost from "../components/Common/LatestBlogPost";
// import NewsletterForm from '../components/Common/NewsletterForm';
import Footer from "../components/_App/Footer";
import Popup from "../components/Popup/Popup";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const togglePopup = () => {
  //   setIsOpen(!isOpen);
  // };
  useEffect(() => {
    setIsOpen(true);
  }, []);
  return (
    <React.Fragment>
      <TopHeader />
      <Navbar />
      {/* <input type="button" value="Click to Open Popup" onClick={togglePopup} /> */}
      {isOpen && (
        <Popup
          content={
            <>
              <b>
                Phone Consultation Only - Until 24th of August - 12:00PM Tier 2
                clinicians
              </b>
            </>
          }
          handleClose={() => setIsOpen(false)}
        />
      )}

      <HeroSlider />
      {/* <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup> */}
      {/* <Stats /> */}
      <AboutSection />
      <Services />
      <OurExpertise />
      {/* <Popup /> */}
      {/* <VideoIntro /> */}
      <OurDoctors />
      <LatestBlogPost />
      {/* <NewsletterForm /> */}
      <Footer />
    </React.Fragment>
  );
};

export default Index;
