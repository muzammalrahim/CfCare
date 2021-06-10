import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const Doctors = () => {
    return (
        <React.Fragment>
            <TopHeader />
            <Navbar />
            <PageBanner 
                pageTitle="Meet Our Qualified Doctors" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Doctors" 
                bgImage="page-title-five" 
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
                                        <input type="text" className="form-control" placeholder="Doctor Name" />
                                    </div>
                                    <button type="submit" className="btn doctor-search-btn">
                                        <i className="icofont-search-1"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-6">
                                <div className="doctor-search-item">
                                    <div className="form-group">
                                        <i className="icofont-hospital"></i>
                                        <label>Category</label>
                                        <select className="form-control">
                                            <option>Neurosurgeon</option>
                                            <option>Cardiology</option>
                                            <option>Pathology</option>
                                            <option>Dental Care</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="doctors-area doctors-area-two pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <div className="doctor-item">
                                <div className="doctor-top">
                                    <img src="/images/doctors/pietas.jpg" alt="Doctor" />

                                    <Link href="/appointment">
                                        <a>Get Appointment</a>
                                    </Link>
                                </div>
                                <div className="doctor-bottom">
                                    <h3>
                                        <Link href="/doctor-details">
                                            <a>Dr. Pietas Nyamayaro</a>
                                        </Link>
                                    </h3>
                                    <span>Neurosurgeon</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="doctor-item">
                                <div className="doctor-top">
                                    <img src="/images/doctors/huda.jpg" alt="Doctor" />
                                    <Link href="/appointment">
                                        <a>Get Appointment</a>
                                    </Link>
                                </div>
                                <div className="doctor-bottom">
                                    <h3>
                                        <Link href="/doctor-details">
                                            <a>Dr. Huda Al-Rawi</a>
                                        </Link>
                                    </h3>
                                    <span>Neurosurgeon</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="doctor-item">
                                <div className="doctor-top">
                                    <img src="/images/doctors/richard.jpg" alt="Doctor" />
                                    <Link href="/appointment">
                                        <a>Get Appointment</a>
                                    </Link>
                                </div>
                                <div className="doctor-bottom">
                                    <h3>
                                        <Link href="/doctor-details">
                                            <a>Dr. Richard Cai</a>
                                        </Link>
                                    </h3>
                                    <span>Dental Surgeon</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="doctor-item">
                                <div className="doctor-top">
                                    <img src="/images/doctors/matthew.jpg" alt="Doctor" />
                                    <Link href="/appointment">
                                        <a>Get Appointment</a>
                                    </Link>
                                </div>
                                <div className="doctor-bottom">
                                    <h3>
                                        <Link href="/doctor-details">
                                            <a>Dr. Matthew Wilson</a>
                                        </Link>
                                    </h3>
                                    <span>Neurosurgeon</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="doctor-item">
                                <div className="doctor-top">
                                    <img src="/images/doctors/faro.jpg" alt="Doctor" />
                                    <Link href="/appointment">
                                        <a>Get Appointment</a>
                                    </Link>
                                </div>
                                <div className="doctor-bottom">
                                    <h3>
                                        <Link href="/doctor-details">
                                            <a>Dr. Sunil Bhojwani</a>
                                        </Link>
                                    </h3>
                                    <span>Neurosurgeon</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="doctor-item">
                                <div className="doctor-top">
                                    <img src="/images/doctors/hanna.png" alt="Doctor" />
                                    <Link href="/appointment">
                                        <a>Get Appointment</a>
                                    </Link>
                                </div>
                                <div className="doctor-bottom">
                                    <h3>
                                        <Link href="/doctor-details">
                                            <a>Dr. Hanna El-Khoury</a>
                                        </Link>
                                    </h3>
                                    <span>Dental Surgeon</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="doctor-item">
                                <div className="doctor-top">
                                    <img src="/images/doctors/doctor7.jpg" alt="Doctor" />
                                    <Link href="/appointment">
                                        <a>Get Appointment</a>
                                    </Link>
                                </div>
                                <div className="doctor-bottom">
                                    <h3>
                                        <Link href="/doctor-details">
                                            <a>Dr. Sana Al-Rubaye</a>
                                        </Link>
                                    </h3>
                                    <span>Neurosurgeon</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-6 col-lg-4">
                            <div className="doctor-item">
                                <div className="doctor-top">
                                    <img src="/images/doctors/doctor8.jpg" alt="Doctor" />
                                    <Link href="/appointment">
                                        <a>Get Appointment</a>
                                    </Link>
                                </div>
                                <div className="doctor-bottom">
                                    <h3>
                                        <Link href="/doctor-details">
                                            <a>Dr. Roozbeh Malekzadeh</a>
                                        </Link>
                                    </h3>
                                    <span>Neurosurgeon</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                            <div className="doctor-item">
                                <div className="doctor-top">
                                    <img src="/images/doctors/doctor9.jpg" alt="Doctor" />
                                    <Link href="/appointment">
                                        <a>Get Appointment</a>
                                    </Link>
                                </div>
                                <div className="doctor-bottom">
                                    <h3>
                                        <Link href="/doctor-details">
                                            <a>Diabetes Educator</a>
                                        </Link>
                                    </h3>
                                    <span>Dental Surgeon</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                            <div className="doctor-item">
                                <div className="doctor-top">
                                    <img src="/images/doctors/doctor9.jpg" alt="Doctor" />
                                    <Link href="/appointment">
                                        <a>Get Appointment</a>
                                    </Link>
                                </div>
                                <div className="doctor-bottom">
                                    <h3>
                                        <Link href="/doctor-details">
                                            <a>Dietitan</a>
                                        </Link>
                                    </h3>
                                    <span>Dental Surgeon</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                            <div className="doctor-item">
                                <div className="doctor-top">
                                    <img src="/images/doctors/doctor9.jpg" alt="Doctor" />
                                    <Link href="/appointment">
                                        <a>Get Appointment</a>
                                    </Link>
                                </div>
                                <div className="doctor-bottom">
                                    <h3>
                                        <Link href="/doctor-details">
                                            <a>Optometrist</a>
                                        </Link>
                                    </h3>
                                    <span>Dental Surgeon</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>
    )
}

export default Doctors;