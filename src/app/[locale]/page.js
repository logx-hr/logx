import Footer from "~/components/Section/Common/Footer";
import Header from "~/components/Section/Common/Header";
import About from "~/components/Section/Home-1/About";
import ChooseUs from "~/components/Section/Home-1/ChooseUs/ChooseUs";
import Cta from "~/components/Section/Home-1/Cta/Cta";
import Fact from "~/components/Section/Home-1/Fact/Fact";
import Hero from "~/components/Section/Home-1/Hero";
import Service from "~/components/Section/Home-1/Service";
import WorkingProcess from "~/components/Section/Home-1/WorkingProcess/WorkingProcess";
import {redirect} from "next/navigation";

// Define i18n config directly to avoid import issues
const i18nConfig = {
    defaultLocale: 'hr',
    locales: ['hr', 'en', 'de', 'es', 'fr'],
};

// This function is required for static export with dynamic [locale] parameter
export function generateStaticParams() {
    return i18nConfig.locales.map(locale => ({ locale }));
}

export default function Home() {
    return (
        <div className="body-dark-bg homeOne">
            <div className="fix">
                <Header />
                <Hero />
                <About />
                <Service />
                <WorkingProcess />
                <Cta />
                <ChooseUs />
                <Fact />
                <Footer />
            </div>
        </div>
    );
}