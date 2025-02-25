"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import {useTranslations} from "next-intl";


const Hero = () => {
  const t = useTranslations();
  return (
    <section className="main-slider main-slider-one">
      <Swiper
        className="swiper-container thm-swiper__slider"
        slidesPerView={1}
        loop={true}
        lazy="true"
        pagination={{
          el: "#main-slider-pagination",
          type: "bullets",
          clickable: true,
        }}
        navigation={{
          nextEl: "#main-slider__swiper-button-prev",
          prevEl: "#main-slider__swiper-button-next",
        }}
        autoplay={{
          delay: 5000,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(/img/slider/scania.webp)",
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
                    <span>01.</span> {t('slider.slider-1-category')}
                  </h3>
                  <h2 dangerouslySetInnerHTML={{ __html: t.raw('slider.slider-1-title') }} >
                  </h2>
                  <p dangerouslySetInnerHTML={{ __html: t.raw('slider.slider-1-description') }} >
                  </p>
                  <div className="btn-box">
                    <Link className="thm-btn" href="contact">
                      <span className="txt">{t('slider.slider-button')}</span>
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
                backgroundImage: "url(/img/slider/packages.webp)",
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
                    <span>02.</span> {t('slider.slider-2-category')}
                  </h3>
                  <h2 dangerouslySetInnerHTML={{ __html: t.raw('slider.slider-2-title') }} >
                  </h2>
                  <p dangerouslySetInnerHTML={{ __html: t.raw('slider.slider-2-description') }} >
                  </p>
                  <div className="btn-box">
                    <Link className="thm-btn" href="contact">
                      <span className="txt">{t('slider.slider-button')}</span>
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
                  backgroundImage: "url(/img/slider/kombi.webp)",
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
                    <span>03.</span> {t('slider.slider-3-category')}
                  </h3>
                  <h2 dangerouslySetInnerHTML={{ __html: t.raw('slider.slider-3-title') }} >
                  </h2>
                  <p dangerouslySetInnerHTML={{ __html: t.raw('slider.slider-3-description') }} >
                  </p>
                  <div className="btn-box">
                    <Link className="thm-btn" href="contact">
                      <span className="txt">{t('slider.slider-button')}</span>
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
                  backgroundImage: "url(/img/slider/avion.webp)",
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
                    <span>04.</span> {t('slider.slider-4-category')}
                  </h3>
                  <h2 dangerouslySetInnerHTML={{ __html: t.raw('slider.slider-4-title') }} >
                  </h2>
                  <p dangerouslySetInnerHTML={{ __html: t.raw('slider.slider-4-description') }} >
                  </p>
                  <div className="btn-box">
                    <Link className="thm-btn" href="contact">
                      <span className="txt">{t('slider.slider-button')}</span>
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
