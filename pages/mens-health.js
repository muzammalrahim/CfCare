import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const ServiceDetails = () => {
  return (
    <React.Fragment>
      <TopHeader />
      <Navbar />
      <PageBanner
        pageTitle="Men's Health"
        homePageUrl="/services"
        homePageText="Services"
        activePageText="Men's Health"
        // bgImage="page-title-one"
        opacity="0.6"
        colour="#008000"
      />

      <div className="service-details-area ptb-100">
        <div className="container">
          {/* <img src="/images/service-details-bg.jpg" alt="Service Details" /> */}

          <h2>Men matter too.</h2>
          <br />
          <br />
          <br />
          <p>
            In an ever demanding world, the health of men across Australia is
            being put to the test, whether it is mental health, reproductive
            health or the odd sunday afternoon footy injury. More emphasis is
            being put into the health of men of all ages. It is important for
            men over the age of 65 to get annual prostate screenings. At
            complete family care and our allied health partners, we offer a
            range of Male specific health determinants, these include:
            <br />
            <br />
            <ul>
              <li>Mental health</li>
              <li>Sports injury & Rehabilitation</li>
              <li>Reproductive health</li>
              <li>Prostate Cancer</li>
              <li>Bowel Cancer</li>
              <li>Diabetes & Hypertension management</li>
              <li>Ophthalmology/Optometry</li>
            </ul>
            <br />
            <br />
            Our doctors with local support of our ever expanding allied health
            network, will be able to assist you and help in your recovery. For
            more information, please call the clinic on 9391-0033 or book an
            online appointment, to speak to one of our doctors today.
          </p>
          {/* <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <blockquote>
              <i className="icofont-quote-left"></i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              optio rem magni, dolorum aut vel nostrum quae, fugit
              necessitatibus eius perferendis. Quia optio tenetur pariatur
              aliquam obcaecati enim quam eum?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sint optio rem magni, dolorum aut
              vel nostrum quae, fugit necessitatibus eius perferendis. Quia
              optio tenetur pariatur aliquam obcaecati enim quam eum?
            </blockquote>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p> */}
        </div>

        {/* <div className="row">
            <div className="col-lg-5">
              <div className="service-details-inner-left">
                <img src="/images/signup-bg.jpg" alt="Service" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="service-details-inner">
                <h2>We Always Take Care Our Patient</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Architecto blanditiis obcaecati veritatis magnam pariatur
                  molestiae in maxime. Animi quae vitae in inventore. Totam
                  mollitia aspernatur provident veniam aperiam placeat impedit!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Saepe rem natus nobis, dolorum nam excepturi iure autem nemo
                  ducimus temporibus facere, est eum voluptatem, culpa optio
                  fugit assumenda quod? Praesentium.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                  laudantium ullam, iure distinctio officia libero voluptatem
                  obcaecati vero deleniti minima nemo itaque alias nisi eveniet
                  soluta architecto quae laboriosam unde.
                </p>
              </div>
            </div>
          </div> */}
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default ServiceDetails;
