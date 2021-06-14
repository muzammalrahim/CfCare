import React from 'react';
import Link from 'next/link';

const OurExpertise = () => {
    return (
        <div className="expertise-area pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Other Bookings</h2>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="expertise-item">
                            <div className="row">
                                <div className="col-sm-6 col-lg-6">
                                    <div className="expertise-inner">
                                      <i class="icofont-patient-file"></i>
                                        <h3> 
                                            <Link href="/#">
                                                <a>Request Script</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="expertise-inner">
                                      <i class="icofont-prescription"></i>
                                        <h3> 
                                            <Link href="/#">
                                                <a>Request Referral</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="expertise-inner">
                                       <i class="icofont-clock-time"></i> 
                                        <h3> 
                                            <Link href="/#">
                                                <a>After Hours</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="expertise-inner">
                                      <i class="icofont-eye-alt"></i>
                                        <h3> 
                                            <Link href="/#">
                                                <a>Optometry</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
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
        </div>
    )
}

export default OurExpertise;