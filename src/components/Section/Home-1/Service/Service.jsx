"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ServiceCard from "~/components/Ui/Cards/ServiceCard";
import {useTranslations} from "next-intl";

const Service = () => {
    const t = useTranslations();

    const serviceItems = [1, 2, 3, 4].map(index => ({
        image: t(`services.item-${index}-image`),
        icon: t(`services.item-${index}-icon`),
        title: t(`services.item-${index}-title`),
        description: t(`services.item-${index}-description`),
        link: t(`services.item-${index}-link`)
    }));

    return (
        <section className="service-one padding-bottom" id="services">
            <div className="container">
                <div className="service-one__top">
                    <div className="sec-title">
                        <div className="sub-title">
                            <h5>
                                <span className="icon-right-arrow-1"></span> {t('services.category')}
                            </h5>
                        </div>
                        <h2 dangerouslySetInnerHTML={{ __html: t.raw('services.title') }}>
                        </h2>
                    </div>

                </div>
                <Swiper
                    className="thm-swiper__slider swiper-container"
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{
                        el: "#service-one__pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: "#team-one__swiper-button-next",
                        prevEl: "#team-one__swiper-button-prev",
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        375: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        575: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    <div className="swiper-wrapper">
                        {serviceItems.map((item, index) => (
                            <SwiperSlide className="swiper-slide" key={index}>
                                <ServiceCard item={item} />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
                <div className="swiper-pagination" id="service-one__pagination"></div>
            </div>
        </section>
    );
};

export default Service;