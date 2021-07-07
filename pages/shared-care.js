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
        pageTitle="Shared Care"
        homePageUrl="/services"
        homePageText="Services"
        activePageText="Shared Care"
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
          <h2>Caring for you and your new arrival.</h2>
          <br />
          <br />
          <br />
          <p>
            Our specialised Doctors, work closely with you and your chosen
            maternity service, to provide care to you throughout your pregnancy.
            <br />
            <br />
            During your regular visits, we assess the health of you and your
            baby, and undertake all the required investigations needed
            throughout your pregnancy. These include referrals: physical
            examinations, Harmony testing, blood tests, ultrasounds and a
            referral to an Obstetrician if needed.
            <br />
            <br />
            Shared care also includes, pre- conception counselling,
            infertility/IVF, and post-partum management.
            <br />
            <br />
            The doctors who specialise in shared care at our clinic include; Dr
            Sana, Dr Huda and Dr Pietas. They have undergone formal training on
            top of their medical degrees to help and assist you throughout your
            pregnancy and will be able to answer any question you may have. When
            booking an appointment, please mention to reception staff that you
            are booking a shared care appointment.
            <br />
            <br />
            We look forward to meeting the little one and providing ongoing care
            for you and them.
            <br />
            <br />
            Our Shared care practitioners are also well trained to help guide
            you through family planning, these include: Implanon, IUD and oral
            contraceptives, including postpartum contraceptive options.
          </p>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default ServiceDetails;
