"use client"
import React from 'react';
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";
import {useTranslations} from "next-intl";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations();
  return (
    <footer className="footer-one ">
      <ScrollToTop smooth top='80' color="white" style={{backgroundColor:"#FFD550", "&:hover": { backgroundColor: "#186265" }}}/>
      <div
        className="footer-one__bg"
        style={{ backgroundImage: "url(/img/resource/logistics-flow.webp)" }}
      ></div>
      <div className="footer-main padding">
        <div className="container">
          <div className="footer-main__bottom padding-top">
            <div className="row">
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div className="single-footer-widget footer-widget__about">
                  <div className="title">
                    <h2>{t('footer.title-1')}</h2>
                  </div>

                  <div className="footer-widget__about-inner">
                    <p className="text1"  dangerouslySetInnerHTML={{ __html: t.raw('footer.description-1') }}></p>

                  </div>
                </div>
              </div>
              <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".2s"
              >
                <div className="single-footer-widget footer-widget__links">
                  <div className="title">
                    <h2>{t('footer.title-2')}</h2>
                  </div>

                  <div className="footer-widget__about-inner">
                    <p className="text1">
                      Jalkovečka ulica 106<br></br>
                      42000 Varaždin<br></br>
                      Hrvatska
                    </p>
                    <p className="text2">{t('footer.availability-2')}:</p>
                    <p className="text3">{t('footer.hours-2')}: 08-16h</p>
                  </div>
                </div>
              </div>
              <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
              >
                <div className="single-footer-widget footer-widget__links services">
                  <div className="title">
                    <h2>{t('footer.title-3')}</h2>
                  </div>

                  <div className="footer-widget__links-box">
                    <ul>
                      <li>
                      <Link href="#services">{t('footer.service-3-first')}</Link>
                      </li>
                      <li>
                        <Link href="#services">{t('footer.service-3-second')}</Link>
                      </li>
                      <li>
                        <Link href="#services">{t('footer.service-3-third')}</Link>
                      </li>
                      <li>
                        <Link href="#services">{t('footer.service-3-fourth')}</Link>
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
                    <h2>{t('footer.title-4')}</h2>
                  </div>
                  <div className="footer-widget__contact-box">
                    <ul>
                      <li>
                        <div className="icon-box">
                          <span className="icon-pin"></span>
                        </div>
                        <div className="content-box">
                          <p>{t('footer.address-4')}</p>
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
                          <p>{t('footer.phone-4')}</p>
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
                © {currentYear} <Link href="/">LogX,</Link> {t('footer.copyright')}
              </p>
            </div>

            <div className="copyright-menu">
              <ul>
                <li>
                  <Link href="http://omnilink.hr">
                    {t('footer.made-by')} ♥️
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
