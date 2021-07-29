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
        pageTitle="Travel Vaccines"
        homePageUrl="/services"
        homePageText="Services"
        activePageText="Travel Vaccines"
        // bgImage="page-title-one"
        opacity="0.6"
        colour="#008000"
      />

      <div className="service-details-area ptb-100">
        <div className="container">
          {/* <div className="services-details-img">
            <img src="/images/service-details-bg.jpg" alt="Service Details" />

            <h2>Our Hospital Always Provide Good Services</h2>
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
            </p>
          </div>

          <div className="row">
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
          <h2>Protecting you in other countries.</h2>
          <br />
          <br />
          <br />
          <p>
            Depending on the country you visit, you may be required to undertake
            additional vaccination against other diseases, which may be uncommon
            or unheard of in Australia.
            <br />
            <br />
            Our specialised Doctors, will advise you on the requirements you
            need to pass to re enter Australia. These vaccines include; Yellow
            Fever, Typhoid, Malaria, cholera, Hepatitis A, Tuberculosis and
            Rabies.
            <br />
            <br />
            This all depends on the country/countries you will be visiting.
            <br />
            <br />
            Your doctor will be able to give you general health and safety
            advice, including: where to eat, what not to eat, and how to best
            protect yourself while you enjoy your trip.
            <br />
            <br />
            If you are unsure of when you need to receive these vaccinations,
            please speak to your doctor well before your trip to avoid any
            inconvenience.
            <br />
            <br />
            Please call reception or book online to chat to your preferred
            doctor before travel.
          </p>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default ServiceDetails;
