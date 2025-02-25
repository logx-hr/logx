"use client";
import ServiceCardTwo from "~/components/Ui/Cards/ServiceCardTwo";
import {useTranslations} from "next-intl";

const ChooseUs = () => {
  const t= useTranslations();

  const serviceItems = [1, 2, 3, 4, 5 ,6].map(index => ({
    icon: t(`why-us.item-${index}-icon`),
    title: t(`why-us.item-${index}-title`),
    description: t(`why-us.item-${index}-description`),
  }));

  return (
    <section className="choose-us-one padding">
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">
            <h5>
              <span className="icon-right-arrow-1"></span> {t('why-us.category')}
            </h5>
          </div>
          <h2> {t('why-us.title')}</h2>
        </div>
        <div className="row">
          {serviceItems.map((item, index) => (
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".1s"
              key={index}
            >
              <ServiceCardTwo item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
