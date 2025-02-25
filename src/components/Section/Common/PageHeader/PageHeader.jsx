"use client"
import Link from "next/link";
import {useTranslations} from "next-intl";

const PageHeader = ({
  title,
  bgImage="/img/resource/logistics-flow.webp"
}) => {
  const t = useTranslations();
  return (
    <section className="page-header padding">
      <div
        className="page-header__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="container">
        <div className="page-header__inner text-center">
          <h2>{title}</h2>
          <ul className="thm-breadcrumb">
            <li>
              <Link href="/">{t('contact.section-link')}</Link>
            </li>
            <li>
              <span className="icon-right-arrow-5"></span>
            </li>
            <li>{title} {title==="404"? "Stranica nije pronađena" : ""}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
