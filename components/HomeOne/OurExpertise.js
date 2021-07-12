import React from "react";
import Link from "next/link";

const OurExpertise = () => {
  return (
    <div className="expertise-area pb-70">
      <div className="container">
        <div className="section-title">
          <h2>Other Services</h2>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="expertise-item">
              <div className="row">
                <div className="col-sm-6 col-lg-6">
                  <div className="expertise-inner">
                    <i class="icofont-patient-file"></i>
                    <p>
                      <Link href="https://automedsystems.com.au/online/clinics/64/complete-family-care-medical-centre-newport-3015/scripts/loc/1">
                        <a>Request Script</a>
                      </Link>
                    </p>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p> */}
                  </div>
                </div>
                <div className="col-sm-6 col-lg-6">
                  <div className="expertise-inner">
                    <i class="icofont-prescription"></i>
                    <p>
                      <Link href="https://automedsystems.com.au/online/clinics/64/complete-family-care-medical-centre-newport-3015/referrals/loc/1">
                        <a>Request Referral</a>
                      </Link>
                    </p>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p> */}
                  </div>
                </div>
                <div className="col-sm-6 col-lg-6">
                  <div className="expertise-inner">
                    <i class="icofont-clock-time"></i>
                    <p>
                      <Link href="https://automedsystems.com.au/online/clinics/64/complete-family-care-medical-centre-newport-3015/doctors/d/Dr-Ben-Mansoori">
                        <a>After Hours</a>
                      </Link>
                    </p>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p> */}
                  </div>
                </div>
                <div className="col-sm-6 col-lg-6">
                  <div className="expertise-inner">
                    <i class="icofont-eye-alt"></i>
                    <p>
                      <Link href="https://www.theeyelab.com.au/appointment/">
                        <a>Optometry</a>
                      </Link>
                    </p>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p> */}
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
  );
};

export default OurExpertise;
