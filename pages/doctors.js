import React, { useState } from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";

const Doctors = () => {
  const doctorsList = [
    {
      id: 0,
      name: "Dr. Pietas Nyamayar",
      category: "Shared Care and Iron Infusion",
      image: "/images/doctors/pietas.jpg",
      categoryy: "Cardiology",
      link: "/dr-pietas",
    },
    {
      id: 1,
      name: "Dr. Huda Al-Rawi",
      category: "Shared Care and Iron Infusion",
      image: "/images/doctors/huda.jpg",
      categoryy: "Cardiology",
      link: "/dr-huda",
    },
    {
      id: 2,
      name: "Dr. Richard Cai",
      category: "Skin Specialist",
      image: "/images/doctors/richard.jpg",
      categoryy: "Cardiology",
      link: "/dr-richard",
    },
    {
      id: 3,
      name: "Dr. Mathew Wilson",
      category: "Neurosurgeon",
      image: "/images/doctors/matthew.jpg",
      categoryy: "Cardiology",
      link: "/dr-mathew",
    },
    {
      id: 4,
      name: "Dr. Sunil Bhojwani",
      category: "Neurosurgeon",
      image: "/images/doctors/faro.jpg",
      categoryy: "Cardiology",
      link: "/dr-sunil",
    },
    {
      id: 5,
      name: "Dr. Hanna El Khoury",
      category: "Skin, Diabetes and Family Medicine",
      image: "/images/doctors/hanna.png",
      categoryy: "Cardiology",
      link: "/dr-hanna",
    },
    {
      id: 6,
      name: "Dr. Sana Al-Rubaye",
      category: "Shared Care,IUD and Implanon",
      image: "/images/doctors/sana.jpg",
      categoryy: "Cardiology",
      link: "/dr-sana",
    },
    {
      id: 7,
      name: "Dr. Roozbeh Malekzadeh",
      category: "Counseling and Psychology",
      image: "/images/doctors/roozbeh.jpg",
      categoryy: "Dental Care",
      link: "/dr-roozbeh",
    },
    // {
    //   id: 8,
    //   name: "Rhiannon Hedra",
    //   category: "Diabetes Educator",
    //   image: "/images/doctors/doctor9.jpg",
    //   categoryy: "Dental Care",
    //   link: "/rhiannon-hedra",
    // },
    // {
    //   id: 9,
    //   name: "Marian Salib",
    //   category: "Dietitian",
    //   image: "/images/doctors/doctor9.jpg",
    //   categoryy: "Pathology",
    //   link: "/marian-salib",
    // },
    // {
    //   id: 10,
    //   name: "Optometrist",
    //   category: "Dental Surgeon",
    //   image: "/images/doctors/doctor9.jpg",
    //   categoryy: "Pathology",
    //   link: "/optometrist",
    // },
  ];

  const [namee, setNamee] = useState("");
  const [categorry, setCategorry] = useState("");

  return (
    <React.Fragment>
      <TopHeader />
      <Navbar />
      <PageBanner
        pageTitle="Meet Our Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Doctors"
        // bgImage="page-title-five"
        opacity="0.6"
        colour="#008000"
      />

      <div className="doctor-search-area">
        <div className="container">
          <form>
            <div className="row doctor-search-wrap">
              <div className="col-sm-6 col-lg-6">
                <div className="doctor-search-item">
                  <div className="form-group">
                    <i className="icofont-doctor-alt"></i>
                    <label>Search</label>
                    <input
                      onChange={(e) => setNamee(e.target.value)}
                      value={namee}
                      type="text"
                      className="form-control"
                      placeholder="Doctor Name"
                    />
                  </div>
                  <button type="button" className="btn doctor-search-btn">
                    <i className="icofont-search-1"></i>
                  </button>
                </div>
              </div>
              {/*
              <div className="col-sm-6 col-lg-6">
                <div className="doctor-search-item">
                  <div className="form-group">
                    <i className="icofont-hospital"></i>
                    <label>Category</label>
                    <select
                      onChange={(e) => setCategorry(e.target.value)}
                      className="form-control"
                    >
                      <option>Neurology</option>
                      <option>Cardiology</option>
                      <option>Pathology</option>
                      <option>Dental Care</option>
                    </select>
                  </div>
                </div>
              </div> */}
            </div>
          </form>
        </div>
      </div>
      <div className="doctors-area doctors-area-two pt-100 pb-70">
        <div className="container">
          <div className="row">
            {doctorsList
              .filter((val) => {
                if (namee == "" && categorry == "") {
                  return val;
                } else if (
                  val.name
                    .toLocaleLowerCase()
                    .includes(namee.toLocaleLowerCase()) &&
                  val.categoryy
                    .toLocaleLowerCase()
                    .includes(categorry.toLocaleLowerCase())
                ) {
                  return val;
                }
              })
              .map((val, id) => (
                <div className="col-sm-6 col-lg-4">
                  <div className="doctor-item">
                    <div className="doctor-top">
                      <img src={val.image} alt="Doctor" />

                      <Link
                        href="https://automedsystems.com.au/online/clinics/64/complete-family-care-medical-centre-newport-3015/doctors"
                        passHref={true}
                      >
                        <a>Get Appointment</a>
                      </Link>
                    </div>
                    <div className="doctor-bottom">
                      <h3>
                        <Link href={val.link}>
                          <a>{val.name}</a>
                        </Link>
                      </h3>
                      <span>{val.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            {/* {doctorsList.filter((val) => !val.name.toLocaleLowerCase().includes(namee.toLocaleLowerCase()))
                     .map((val,id) =>(
                         <div>
                         Doctor Not found    
                         </div>
                     ))} */}
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Doctors;
