import React from "react";
// import Link from '../../utils/ActiveLink';
import Link from "next/link";
const Navbar = () => {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <div id="navbar" className="navbar-area sticky-top">
      <div className="main-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link href="/">
              <a onClick={toggleNavbar} className="navbar-brand">
                <img src="/images/logo1.png" alt="logo" />
              </a>
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/" activeClassName="active">
                    <a className="nav-link">Homepage</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/doctors">
                    <a href="/doctors" className="nav-link dropdown-toggle">
                      Our Team
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/dr-pietas" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Dr.pietas Nyamayaro
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/dr-richard" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Dr. Richard Cai
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/dr-matthew" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Dr. Matthew Wilson
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/dr-huda" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Dr. Huda Al-Rawi
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/dr-sunil" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Dr. Sunil Bhojwani
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/dr-hanna" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Dr. Hanna El-Khoury
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/dr-sana" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Dr. Sana Al-Rubaye
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/dr-roozbeh" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Dr. Roozbeh Malekzadeh
                        </a>
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link href="/rhiannon-hedra" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          rhiannon-hedra
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/marian-salib" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Marian Salib
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/optometrist" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Optometrist
                        </a>
                      </Link>
                    </li> */}
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="/allied-health">
                    <a className="nav-link">Allied Health</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/services">
                    <a className="nav-link dropdown-toggle">Services</a>
                  </Link>

                  <ul className="dropdown-menu">
                    {/* <li className="nav-item">
                                            <Link href="/womens-health" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Women's Health</a>
                                            </Link>
                                        </li> */}
                    <li className="nav-item">
                      <Link href="/mens-health" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Men's Health
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/workcover" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Workcover & TAC
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/childrens-immunisation"
                        activeClassName="active"
                      >
                        <a onClick={toggleNavbar} className="nav-link">
                          Children's Immunisations
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/travel-vaccines" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Travel Vaccines
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/allied-health" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Allied Health
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/shared-care" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Shared Care
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/optometry" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Optometry
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/dentistry" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Dentistry
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="/faq" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      FAQ
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="nav-srh">
              <a href="https://automedsystems.com.au/online/clinics/64/complete-family-care-medical-centre-newport-3015/doctors">
                <button class="bookings-btn">Bookings</button>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
