'use client';

import Link from "next/link";
import { useEffect } from "react";
import "wowjs/css/libs/animate.css";
const WorkingProcess = () => {


  useEffect(() => {
    import('wowjs').then(WOW => {
      const wow = new WOW.WOW({
        boxClass: "wow", // default
        animateClass: "animated", // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
      });
      wow.init();
    });
  }, []);

  return (
      <section className="working-process-one working-process-one-responsive">
        <div
            className="working-process-one__bg"
            style={{
              backgroundImage: "url(/img/resource/utovar.webp)",
            }}
        ></div>
        <div className="container">
          <div className="sec-title text-center">
            <div className="sub-title">
              <h5>
                <span className="icon-right-arrow-1"></span> Provjerite naše korake
              </h5>
            </div>
            <h2>Naš proces rada s teretom</h2>
          </div>
          <div className="row">
            <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay={'0ms'}
                data-wow-duration={"1500ms"}
            >
              <div className="working-process-one__single">
                <div className="shape1">
                  <img src="/img/shape/working-process-v1-shape1.png" alt="" />
                </div>
                <div className="working-process-one__single-top">
                  <div className="icon">
                    <img src="/img/icon/working-process/step-1.png" alt="" />
                  </div>
                  <div className="text">
                    <h2>Korak - 1</h2>
                  </div>
                </div>
                <div className="working-process-one__single-content">
                  <h2>
                    <Link href="#">Dokumentacija</Link>
                  </h2>
                  <p>
                    Nakon što pošaljete narudžbu putem e-pošte, naše terensko osoblje prikupit će dokumente i pošiljke od pošiljatelja.
                  </p>
                </div>
              </div>
            </div>
            <div
                className="col-xl-4 col-lg-4 wow fadeInRight"
                data-wow-delay={"200ms"}
                data-wow-duration={"1500ms"}
            >
              <div className="working-process-one__single ml60">
                <div className="shape1">
                  <img src="/img/shape/working-process-v1-shape1.png" alt="" />
                </div>
                <div className="working-process-one__single-top">
                  <div className="icon">
                    <img src="/img/icon/working-process/step-2.png" alt="" />
                  </div>
                  <div className="text">
                    <h2>Korak - 2</h2>
                  </div>
                </div>
                <div className="working-process-one__single-content">
                  <h2>
                    <Link href="#">Odaberite lokaciju</Link>
                  </h2>
                  <p>
                    Procijenit ćemo veličinu i težinu Vašeg tereta te prevesti Vašu robu do odredišta.
                  </p>
                </div>
              </div>
            </div>
            <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
            >
              <div className="working-process-one__single ml80">
                <div className="working-process-one__single-top">
                  <div className="icon">
                    <img src="/img/icon/working-process/step-3.png" alt="" />
                  </div>
                  <div className="text">
                    <h2>Korak - 3</h2>
                  </div>
                </div>
                <div className="working-process-one__single-content">
                  <h2>
                    <Link href="#">Partneri do kraja</Link>
                  </h2>
                  <p>
                    Naši timovi naporno će raditi u svakom koraku putovanja kako bi osigurali da vaša pošiljka bude isporučena na vrijeme.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default WorkingProcess;