import PageHeader from "~/components/Section/Common/PageHeader";
import ErrorSection from "~/components/Section/ErrorSection";
import Header from "~/components/Section/Common/Header";
import Footer from "~/components/Section/Common/Footer";
import Cta from "~/components/Section/Home-1/Cta/Cta";


const NotFoundPage = () => {
  return (
    <>
     <Header/>
      <PageHeader title="404" />
      <ErrorSection />
      <Cta/>
      <Footer />
    </>
  );
};

export default NotFoundPage;
