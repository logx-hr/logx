"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="main-slider main-slider-one">
      <Swiper
        className="swiper-container thm-swiper__slider"
        slidesPerView={1}
        loop={true}
        effect={"fade"}
        pagination={{
          el: "#main-slider-pagination",
          type: "bullets",
          clickable: true,
        }}
        navigation={{
          nextEl: "#main-slider__swiper-button-next",
          prevEl: "#main-slider__swiper-button-prev",
        }}
        autoplay={{
          delay: 7000,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(/img/slider/scania.png)",
              }}
            ></div>
            <div className="big-title">
              <h2>Kamioni</h2>
            </div>

            <div className="icon-one">
              <img src="/img/icon/slider-v1-icon1.png" alt="" />
            </div>
            <div className="icon-two">
              <img src="/img/icon/slider-v1-icon2.png" alt="" />
            </div>
            <div className="container">
              <div className="main-slider-one__single padding">
                <div className="main-slider-one__content">
                  <h3>
                    <span>01.</span> Kamionski prijevoz
                  </h3>
                  <h2>
                    Brzi i pouzdani <br />
                    <span>transport</span> vaših <br />
                    proizvoda
                  </h2>
                  <p>
                    Sa godinama iskustva i tisućama pređenih <br />
                    kilometara iza nas.
                  </p>
                  <div className="btn-box">
                    <Link className="thm-btn" href="contact">
                      <span className="txt">Kontaktirajte nas</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(/img/slider/packages.png)",
              }}
            ></div>
            <div className="big-title">
              <h2>Express</h2>
            </div>
            <div className="icon-one">
              <img src="/img/icon/slider-v1-icon1.png" alt="" />
            </div>
            <div className="icon-two">
              <img src="/img/icon/slider-v1-icon2.png" alt="" />
            </div>
            <div className="container">
              <div className="main-slider-one__single padding">
                <div className="main-slider-one__content">
                  <h3>
                    <span>02.</span> Express Pošiljke
                  </h3>
                  <h2>
                    Snaga na cesti <br/>
                    <span>pouzdanost</span> u <br/>
                    prijevozu
                  </h2>
                  <p>
                    Šaljite pošiljke unutar cijele EU <br/>
                    u roku od 24 sata!
                  </p>
                  <div className="btn-box">
                    <Link className="thm-btn" href="contact">
                      <span className="txt">Kontaktirajte nas</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
                className="image-layer"
                style={{
                  backgroundImage: "url(/img/slider/kombi.png)",
              }}
            ></div>
            <div className="big-title">
              <h2>Kombi</h2>
            </div>
            <div className="icon-one">
              <img src="/img/icon/slider-v1-icon1.png" alt="" />
            </div>
            <div className="icon-two">
              <img src="/img/icon/slider-v1-icon2.png" alt="" />
            </div>
            <div className="container">
              <div className="main-slider-one__single padding">
                <div className="main-slider-one__content">
                  <h3>
                    <span>03.</span> Kombi prijevoz
                  </h3>
                  <h2>
                    Povezujemo <br/>
                    <span>Europu </span> kilometar<br/>
                    po kilometar!
                  </h2>
                  <p>
                    Sve prema Vašoj potrebi za <br/>
                    savršeno isplanirani posao.
                  </p>
                  <div className="btn-box">
                    <Link className="thm-btn" href="contact">
                      <span className="txt">Kontaktirajte nas</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
        <div className="swiper-pagination" id="main-slider-pagination"></div>
        <div className="main-slider__nav">
        <div
            className="swiper-button-prev"
            id="main-slider__swiper-button-next"
          >
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </div>
          <div
            className="swiper-button-next"
            id="main-slider__swiper-button-prev"
          >
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;
