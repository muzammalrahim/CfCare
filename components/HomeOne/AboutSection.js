import React from "react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="about-area pt-100 pb-70">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-item">
              <div className="about-left">
                {/* <img src="/images/about1.jpg" alt="About" /> */}
                <img
                  src="https://trello-attachments.s3.amazonaws.com/5f2ce0d402682b2fde533f1e/60dedbb6f90a9719501ef761/473b8def80abe2b1f1cc638b1d66dcea/ee6a24_fd6982af5f43416eb304cd68cbbc9cd0~mv2_d_3264_2448_s_4_2.webp"
                  alt="About"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-item about-right">
              <img src="/images/about-shape1.png" alt="About" />
              <h2>About Our Clinic</h2>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.{" "}
              </p> */}
              <p>
                {" "}
                The Complete Family care was established, 25 years ago, with the
                purchase of an old nursing home during the summer of 1992. Over
                the years of working as a team, providing the best level of
                cover to our patients of Newport as your doctors of choice, we
                have learned and work together The Team of Complete Family care
                has learn and work together provide the best level of cover to
                our patients of Newport as your doctors of choice.
              </p>

              <ul>
                <li>
                  <i className="icofont-check-circled"></i>
                  Browse Our Website
                </li>
                <li>
                  <i className="icofont-check-circled"></i>
                  Choose Service
                </li>
                <li>
                  <i className="icofont-check-circled"></i>
                  Send Messege
                </li>
              </ul>

              <Link href="/about">
                <a>Know More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
