"use client"
import PageHeader from "~/components/Section/Common/PageHeader";
import ContactUsSection from "~/components/Section/Contact/ContactUsSection";
import MapSection from "~/components/Section/Contact/MapSection";
import Footer from "~/components/Section/Common/Footer";
import Header from "~/components/Section/Common/Header";
import {useTranslations} from "next-intl";



const ContactPage = () => {
    const t = useTranslations();
  return (
    <>
     <Header/>
      <PageHeader title={t('contact.section-title')}/>
      <ContactUsSection />
      <MapSection />
      <Footer />
    </>
  );
};

export default ContactPage;
