import React from 'react';
import Link from 'next/link';

const OurDoctors = () => {
    return (
        <div className="doctors-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>Meet Our Doctors</h2>
                </div>

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
                                    <Link href="/dr-pietas">
                                        <a>Dr. Pietas Nyamayaro</a>
                                    </Link>
                                </h3>
                                <span>NShared Care and Iron Infusion</span>
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
                                    <Link href="/dr-huda">
                                        <a>Dr. Huda Al-Rawi</a>
                                    </Link>
                                </h3>
                                <span>Shared Care and Iron Infusion</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                        <div className="doctor-item">
                            <div className="doctor-top">
                                <img src="/images/doctors/hanna.png" alt="Doctor" />
                                <Link href="/appointment">
                                    <a>Get Appointment</a>
                                </Link>
                            </div>
                            <div className="doctor-bottom">
                                <h3>
                                    <Link href="/dr-richard">
                                        <a>Dr. Hanna El-Khoury</a>
                                    </Link>
                                </h3>
                                <span>Skin, Diebetes and Family Medicine</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="doctor-btn">
                    <Link href="/doctors">
                        <a>See All</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OurDoctors;