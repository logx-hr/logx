"use client"
import React from 'react';
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";
import BrandLogo from "~/components/Ui/Logo/BrandLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-one ">
<ScrollToTop smooth top='80' color="white" style={{backgroundColor:"#FFD550", "&:hover": { backgroundColor: "#186265" }}}/>
      <div
        className="footer-one__bg"
        style={{ backgroundImage: "url(/img/resources/logistics-flow.webp)" }}
      ></div>
      <div className="footer-main padding">
        <div className="container">
          <div className="footer-main__bottom padding-top">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div className="single-footer-widget footer-widget__about">
                  <div className="title">
                    <h2>O LogX-u</h2>
                  </div>

                  <div className="footer-widget__about-inner">
                    <p className="text1">
                      Pouzdana logistička tvrtka s dugogodišnjim iskustvom u sigurnom prijevozu i skladištenju robe.<br></br><br/>
                      Naš stručni tim pruža personalizirana rješenja za sve vrste transporta, uz jamstvo točnosti i pravovremene isporuke.<br></br>
                      Prioritet nam je sigurnost vaše robe i zadovoljstvo klijenata.
                    </p>

                    <div className="footer-social-link">
                      <Link href="#">
                        <span className="icon-facebook"></span>
                      </Link>
                      <Link href="#">
                        <span className="icon-twitter"></span>
                      </Link>
                      <Link href="#">
                        <span className="icon-instagram"></span>
                      </Link>
                      <Link href="#">
                        <span className="icon-linkedin"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                  className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".2s"
              >
                <div className="single-footer-widget footer-widget__about">
                  <div className="title">
                    <h2>Lokacija</h2>
                  </div>

                  <div className="footer-widget__about-inner">
                    <p className="text1">
                      Jalkovečka ulica 106<br></br>
                      42000 Varaždin<br></br>
                      Hrvatska
                    </p>
                    <p className="text2">Dostupni smo:</p>
                    <p className="text3">Pon-Pet: 08-16h</p>
                  </div>
                </div>
              </div>
              <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
              >
                <div className="single-footer-widget footer-widget__links services">
                  <div className="title">
                    <h2>Naše usluge</h2>
                  </div>

                  <div className="footer-widget__links-box">
                    <ul>
                      <li>
                        <Link href="#services">Kamionski prijevoz</Link>
                      </li>
                      <li>
                        <Link href="#services">Kombi prijevoz</Link>
                      </li>
                      <li>
                        <Link href="#services">Avionski prijevoz</Link>
                      </li>
                      <li>
                        <Link href="#services">Express pošiljke</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".4s"
              >
                <div className="single-footer-widget footer-widget__contact">
                  <div className="title">
                    <h2>Kontakt podaci</h2>
                  </div>
                  <div className="footer-widget__contact-box">
                    <ul>
                      <li>
                        <div className="icon-box">
                          <span className="icon-pin"></span>
                        </div>
                        <div className="content-box">
                          <p>Adresa ureda</p>
                          <h4>Splitska ulica 8,<br/> 42000 Varaždin</h4>
                        </div>
                      </li>
                      <li>
                        <div className="icon-box">
                          <span className="icon-paper-plane"></span>
                        </div>
                        <div className="content-box">
                          <p>Email</p>
                          <h4>
                            <Link href="mailto:info@logx.hr">
                              info@logx.hr
                            </Link>
                          </h4>
                        </div>
                      </li>
                      <li>
                        <div className="icon-box">
                          <span className="icon-out-call"></span>
                        </div>
                        <div className="content-box">
                          <p>Telefon</p>
                          <h4>
                            <Link href="tel:+385998199941">+385 99 819 9941</Link>
                          </h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom__inner">
            <div className="copyright-text">
              <p>
                © {currentYear} <Link href="/">LogX,</Link> Sva Prava Zadržana.
              </p>
            </div>

            <div className="copyright-menu">
              <ul>
                <li>
                  <Link href="http://omnilink.hr">
                    Made by Omnilink with ♥️
                    <span className="icon-right-arrow-5"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
