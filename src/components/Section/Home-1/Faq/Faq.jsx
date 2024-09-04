"use client";
import Link from "next/link";
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
  return (
      <section className="faq-one padding"
               style={{ backgroundColor: "#0d4250" }}
               id="faq"
      >
        <div className="big-title">
          <h2>čpp</h2>
        </div>
        <div
            className="faq-one__bg"
            style={{ backgroundImage: "url(/img/resource/night_truck.jpg)" }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6  faq-padding-top">
              <div className="faq-one__faq">
                <div className="sec-title">
                  <div className="sub-title">
                    <h5><span className="icon-right-arrow-1"></span> Najčešća pitanja</h5>
                  </div>
                  <h2>Pitanja i odgovori</h2>
                </div>
                <Accordion defaultActiveKey="0" className='accrodion-grp faq-one__accrodion accordion-one'>
                  <Accordion.Item eventKey="0" >
                    <Accordion.Header >
                      <h2>
                        <span>01.</span> Kako mogu platiti vaše logističke usluge?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body>
                      <span>Odgovor:</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header >
                      <h2>
                        <span>02.</span> Kako mogu pratiti svoje pošiljke?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body>
                      <span>Odgovor:</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header >
                      <h2>
                        <span>03.</span> Mogu li odrediti datum dostave prilikom naručivanja?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body>
                      <span>Odgovor:</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header >
                      <h2>
                        <span>04.</span> Imate li savjet za one koji prvi put šalju pošiljku?
                      </h2>
                    </Accordion.Header>
                    <Accordion.Body>
                      <span>Odgovor:</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-6">
              <div
                  className="faq-one__contact-info wow fadeInRight"
                  data-wow-delay=".3s"
              >
                <div className="">
                  <p>Razgovarajmo</p>
                  <h3>Trebate li pomoć? Javite nam se</h3>
                </div>

                <div className="faq-one__contact-info-number">
                  <div className="icon"
                       style={{ backgroundColor: "#0d4250" }}
                  >
                    <span className="icon-call"></span>
                  </div>

                  <div className="text">
                    <h3><Link href="tel:123456789">+385 99 819 9941</Link></h3>
                  </div>
                </div>

                <div className="btn-box">
                  <Link className="thm-btn" href="contact">
                    <span className="txt">Kontaktirajte nas</span>
                    <i className="icon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Faq;