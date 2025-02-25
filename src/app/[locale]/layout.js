import "~/assets/css/bootstrap.min.css";
import "~/assets/css/all.min.css";
import "~/assets/css/style.css";
import "~/assets/css/animate.min.css";
import "~/assets/css/custom-animate.css";
import "~/assets/css/responsive.css";
import "~/assets/css/icomoon.css";
import "~/assets/css/color-2.css";
import "~/assets/css/color-3.css";
import "~/assets/css/react-adjustment.css";
import "~/assets/css/module-css/about.css";
import "~/assets/css/module-css/footer.css";
import "~/assets/css/module-css/header.css";
import { Metadata } from "~/components/Section/Common/Metadata/Metadata";
import ClientProvider from './ClientProvider';
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

export default function RootLayout({ children, params }) {
    const { locale = i18nConfig.defaultLocale } = params || {};

    // Validate that the locale exists
    if (locale && !i18nConfig.locales.includes(locale)) {
        throw new Error(`Invalid locale: ${locale}`);
    }
    // redirect('/hr');
    return (
        <html lang={locale || 'hr'}>
        <head>
            <title>{Metadata.title}</title>
            <meta name="description" content={Metadata.description}/>
            <meta name="google-site-verification" content="iTRZwocSbNI9egA1AJV96CmlcMkZSQ6QDPXC9d4P1IM"/>
            <meta name="robots" content="index, follow"/>
            <meta name="mobile-web-app-capable" content="yes"/>
            <meta name="application-name" content="LogX Logistika"/>
            <meta property="og:title" content={Metadata.title}/>
            <meta property="og:site_name" content="LogX Logistika"/>
            <meta property="og:description" content={Metadata.description}/>
            <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
            <meta name="keywords"
                  content="Logistika, Logistics, Prijevoz, Transport, Kamion, Kombi, Avionski prijevoz, Logx, Logx logistika, Logx prijevoz"/>
        </head>
        <body>
        <ClientProvider locale={locale}>
            {children}
        </ClientProvider>
        </body>
        </html>
    );
}