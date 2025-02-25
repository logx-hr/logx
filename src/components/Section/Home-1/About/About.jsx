"use client";
import ContentCard from "~/components/Ui/Cards/ContentCard";
import {useTranslations} from "next-intl";

const About = () => {
  const t = useTranslations();
  return (
    <div className="about-one padding" id="about">
      <div className="about-one__big-title">{t('about.big-title')}</div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="about-one__img clearfix">

              <div className="inner clearfix">
                <img
                  src="/img/resource/truck_crop.webp"
                  alt=""
                />
              </div>

            </div>
          </div>

          <div className="col-xl-7">
            <div className="about-one__content">
              <div className="about-one__content-top">
                <div className="sec-title">
                  <div className="sub-title">
                    <h5>
                      <span className="icon-right-arrow-1"></span>{t('about.category')}
                    </h5>
                  </div>
                  <h2 dangerouslySetInnerHTML={{ __html: t.raw('about.title') }} >
                  </h2>
                </div>

                <div className="text">
                  <p>
                    {t('about.description')}
                  </p>
                </div>
              </div>

              <div className="about-one__content-features">
                <ul>
                  <li
                    className="wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <ContentCard image="/img/icon/about/worldwide-delivery.png" title={t('about.item-1-title')} description={t('about.item-1-description')} />
                  </li>

                  <li
                    className="wow fadeInRight"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <ContentCard image="/img/icon/about/secure-delivery.png" title={t('about.item-2-title')} description={t('about.item-2-description')} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;