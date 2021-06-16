import React from 'react';

const TopHeader = () => {
    return (
        <div className="header-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-8 col-lg-9">
                        <div className="header-top-item">
                            <div className="header-top-left">
                                <ul>
                                    <li>
                                        <a href="tel:+0393910033">
                                            <i className="icofont-ui-call"></i>
                                            (03) 9391- 0033
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:+0393919846">
                                            <i className="icofont-fax"></i>
                                            (03) 9391- 9846
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:management@cfcare.com.au">
                                            <i className="icofont-ui-message"></i>
                                           management@cfcare.com.au
                                        </a>
                                    </li>
                                    <li>
                                            <i className="icofont-location-pin"></i>
                                            <a href="https://goo.gl/maps/ppZZzknFoGGsBDpv7">471 Melbourne Road, Newport, Melbourne, Victoria 3015</a>
                                        </li>
                                    <li>
                                        <i className="icofont-medical-sign"></i>
                                        In case of emergency, Dial 000
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 col-lg-3">
                        <div className="header-top-item">
                            <div className="header-top-right">
                                <ul>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="icofont-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://automedsystems.com.au/online/clinics/64/complete-family-care-medical-centre-newport-3015/doctors" target="_blank">
                                        <i class="icofont-live-support"></i>
                                    </a>
                                    </li>
                                    {/* <li>
                                        <a href="#" target="_blank">
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="icofont-linkedin"></i>
                                        </a>
                                    </li> */}
                                    {/* <li>
                                        <a href="#" target="_blank">
                                            <i className="icofont-instagram"></i>
                                        </a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;