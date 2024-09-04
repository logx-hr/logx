import FooterThree from "~/components/Section/Common/Footer/FooterThree";
import PageHeader from "~/components/Section/Common/PageHeader";
import ContactUsSection from "~/components/Section/Contact/ContactUsSection";
import MapSection from "~/components/Section/Contact/MapSection";
import Footer from "~/components/Section/Common/Footer";
import Header from "~/components/Section/Common/Header";
import CtaThree from "~/components/Section/Common/Cta/CtaThree";



const ContactPage = () => {
  return (
    <>
     <Header/>
      <PageHeader title="Kontaktirajte nas" />
      <ContactUsSection />
      <MapSection />
      <Footer />
    </>
  );
};

export default ContactPage;
