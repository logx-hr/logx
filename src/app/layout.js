"use client"
// import { Krub, Rubik } from "next/font/google";
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
import Loading from "~/components/Section/Common/Loading/Loading";
import React, { useEffect, useState } from "react";
import { Metadata } from "~/components/Section/Common/Metadata/Metadata";
import { usePathname } from "next/navigation";




export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200); // Adjust the loading duration as needed

    return () => clearTimeout(timer);
  }, [pathname]);


  return (
    <html lang="hr">
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
      {/* Other Metadata properties */}
      {Metadata.icons && (
          <React.Fragment>
            {Metadata.icons.icon.map((icon, index) => (
                <link key={index} rel="icon" href={icon}/>
            ))}
            {Metadata.icons.apple && Metadata.icons.apple.map((appleIcon, index) => (
                <link key={index} rel="apple-touch-icon" href={appleIcon}/>
            ))}
            {Metadata.icons.shortcut && Metadata.icons.shortcut.map((shortcutIcon, index) => (
                <link key={index} rel="shortcut icon" href={shortcutIcon}/>
            ))}
          </React.Fragment>
      )}
    </head>
    <body>
    <Loading isLoading={isLoading}/>
    {!isLoading && children}
    </body>
    </html>
  );
}
