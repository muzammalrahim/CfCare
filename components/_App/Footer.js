import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <React.Fragment>
            <footer className="pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <div className="footer-item">
                                <div className="footer-contact">
                                    <h3>Contact Us</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-message"></i>
                                            <a href="mailto:management@cfcare.com.au">management@cfcare.com.au</a>
                                        </li>
                                        <li>
                                            <i className="icofont-stock-mobile"></i>
                                            <a href="tel:+0393910033">Call: (03) 9391- 0033</a>
                                            <a href="tel:+0393919846">Fax: (03) 9391- 9846</a>
                                        </li>
                                        <li>
                                            <i className="icofont-location-pin"></i>
                                            471 Melbourne Road, Newport, Melbourne, Victoria 3015
                                        </li>
                                        <li>
                                            <i className="icofont-medical-sign"></i>
                                            In case of emergency, Dial 000
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-2">
                            <div className="footer-item">
                                <div className="footer-quick">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li>
                                            <Link href="/">
                                                <a>Homepage</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>Services</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/doctors">
                                                <a>Our Team</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>Allied Health</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <div className="footer-quick">
                                    <h3>Quick Bookings</h3>
                                    <ul>
                                        <li>
                                            <a href="https://www.cfcare.com.au/">Request Script</a>
                                        </li>
                                        <li>
                                            <a href="https://www.cfcare.com.au/">After Hour's Appointment</a>
                                        </li>
                                        <li>
                                            <a href="https://www.cfcare.com.au/">Request Referral</a>
                                        </li>
                                        <li>
                                            <a href="https://www.cfcare.com.au/">Optometrist</a>
                                        </li>
                                        <li>
                                            <a href="https://www.cfcare.com.au/">Online Booking</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> 

                        {/* <div className="col-sm-6 col=lg-3">
                            <div className="footer-item">
                                <div className="footer-hours">
                                    <h3>Business Hours</h3>
                                    <p>Monday <span>   8:00am</span><span>   8:00pm</span></p>
                                    
                                    <p>Tuesday <span>   8:00am</span><span>   8:00pm</span></p>
                                    
                                    <p>Wednesday <span>   8:00am</span><span>   8:00pm</span></p>
                                    
                                    <p>Thursday <span>   8:00am</span><span>   8:00pm</span></p>
                                    
                                    <p>Friday <span>   8:00am</span><span>   8:00pm</span></p>
                                    
                                    <p>Saturday <span>   9:00am</span><span>   3:00pm</span></p>
                                    
                                    <p>Sunday <span>   Closed</span></p>
                                    
                                </div>
                            </div>
                        </div> */}

                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <div className="footer-feedback">
                                    <h3>Feedback</h3>
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Phone" />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" id="your_message" rows="3" placeholder="Message"></textarea>
                                        </div>
                                        <div className="text-left">
                                            <button type="submit" className="btn feedback-btn">SUBMIT</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div class="hours col-sm-12 col-lg-12">
                            <p>Monday 8am-8pm</p>
                            <p>Tuesday 8am-8pm</p>
                            <p>Wednesday 8am-8pm</p>
                            <p>Thursday 8am-8pm</p>
                            <p>Friday 8am-8pm</p>
                            <p>Saturday 9am-3pm</p>
                            <p>Sunday Closed</p>
                        </div>
                            <p className="col-sm-12 col-lg-12 text-center">Public Holidays 9am to 4pm</p>
                    </div>
                </div>
            </footer>

            <div className="copyright-area">
                <div className="container">
                    <div className="copyright-item">
                        <p>Copyright (c) 2021 Design & Developed by <a href="https://lavonglobal.com.au/" target="_blank">Lavon Global</a></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;