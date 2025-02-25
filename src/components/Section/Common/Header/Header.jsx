"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from "~/components/LanguageSwitcher";
import {usePathname, useRouter} from "next/navigation";


const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [home, setHome] = useState(false);
    const [service, setService] = useState(false);
    const [page, setPage] = useState(false);
    const [blog, setBlog] = useState(false);
    const [scrollClassName, setScrollClassName] = useState("");
    const [isOverlayActive, setIsOverlayActive] = useState(false);
    const t = useTranslations();
  
    const mobileMenuOpen = () => {
      setMobileMenu(true);
      setIsOverlayActive(true);
      document.body.classList.add('disable-scroll');
    };
  
    const mobileMenuClose = () => {
      setMobileMenu(false);
      setIsOverlayActive(false);
      document.body.classList.remove('disable-scroll');
    };
  
    const serviceHandler = () => {
      setService(!service);
    };
  
    const pageHandler = () => {
      setPage(!page);
    };
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setScrollClassName("sticky-menu");
        } else {
          setScrollClassName("");
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const [isActive, setIsActive] = useState(false);
  
    const togglePopup = () => {
      setIsActive(!isActive);
      document.body.classList.toggle('locked');
    };
  
    function preloader() {
      // Implementation of the preloader function
    }
  
    if (typeof window !== 'undefined') {
      window.onload = () => {
        preloader();
      };
    }


    const pathname = usePathname();
    const router = useRouter();

// Get current locale from pathname
    const getCurrentLocale = () => {
        const segments = pathname.split('/');
        const locales = ['hr', 'en', 'de', 'fr', 'es'];
        return locales.includes(segments[1]) ? segments[1] : 'hr'; // Default to 'hr' if no locale found
    };

    const currentLocale = getCurrentLocale();

// Check if current page is homepage
    const isHomePage = pathname === '/' ||
        pathname === `/${currentLocale}` ||
        pathname === `/${currentLocale}/`;

// Helper function to determine the correct href for sections with locale
    const getSectionHref = (sectionId) => {
        if (isHomePage) {
            return `?section=${sectionId}`;
        } else {
            return `/${currentLocale}?section=${sectionId}`;
        }
    };

// Handle section click events
    const handleSectionClick = (e, sectionId) => {
        e.preventDefault(); // Prevent default for both homepage and other pages

        if (isHomePage) {
            // When on homepage, update URL and scroll directly
            const newUrl = `${window.location.pathname}?section=${sectionId}`;
            window.history.pushState({}, '', newUrl);

            // Scroll to element
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }

            // Clean up URL after scrolling
            setTimeout(() => {
                window.history.replaceState({}, '', window.location.pathname);
            }, 1000);
        } else {
            // Navigate to homepage with section parameter
            router.push(`/${currentLocale}?section=${sectionId}`);
        }
    };

// Check for section query parameter on page load
    useEffect(() => {
        // Check if we have a section parameter in the URL
        const url = new URL(window.location.href);
        const section = url.searchParams.get('section');

        if (section) {
            // Remove the query parameter without triggering a navigation
            window.history.replaceState({}, document.title, window.location.pathname);

            // Scroll to the section with a slight delay to ensure the page is fully loaded
            setTimeout(() => {
                const element = document.getElementById(section);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        }
    }, [pathname, currentLocale]);


    return (
        <header className="main-header main-header-one">
            <div id="sticky-header" className={`menu-area ${scrollClassName}`}>
                <div className="main-header-one__outer">
                    <div className="logo-box-one">
                        <Link href="/"><img src="/img/logo/logx-logo.png" alt="Logo" /></Link>
                    </div>
                    <div className="main-header-one__right">
                        <div className="container">
                            <div className="menu-area__inner">
                                <div className="mobile-nav-toggler" onClick={mobileMenuOpen}>
                                    <i className="fas fa-bars"></i>
                                </div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="main-header-one__inner">
                                            <div className="main-header-one__top">
                                                <div
                                                    className="main-header-one__top-pattern"
                                                ></div>
                                                <div className="main-header-one__top-inner">
                                                    <div className="main-header-one__top-left">
                                                        <div className="header-contact-info">
                                                            <ul>
                                                                <li>
                                                                    <div className="icon-box">
                                                                        <span className="icon-pin"></span>
                                                                    </div>
                                                                    <p>Splitska ulica 8, 42000 Varaždin</p>
                                                                </li>
                                                                <li>
                                                                    <div className="icon-box">
                                                                        <span className="icon-paper-plane"></span>
                                                                    </div>
                                                                    <p>
                                                                        <Link href="mailto:info@logx.hr" aria-label={'Send us an email'}>info@logx.hr</Link>
                                                                    </p>
                                                                </li>
                                                                <li>
                                                                    <div className="icon-box">
                                                                        <span className="icon-out-call"></span>
                                                                    </div>
                                                                    <p className="desktop-only">+385 99 819 9941</p>
                                                                    <p className="mobile-only">
                                                                        <Link href="tel:+385998199941"
                                                                              aria-label={'Call us'}>+385 99 819
                                                                            9941</Link>
                                                                    </p>

                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <LanguageSwitcher></LanguageSwitcher>
                                                </div>
                                            </div>

                                            <div className="main-header-one__bottom">
                                                <div className="main-header-one__bottom-left">
                                                    <div className="navbar-wrap main-menu">
                                                        <ul className="navigation">
                                                            <li>
                                                                <Link href={"/" + currentLocale} aria-label={'Go to homepage'}>{t('navigation.home')}</Link>
                                                            </li>
                                                            <li><Link href={getSectionHref('about')}       onClick={(e) => handleSectionClick(e, 'about')}  aria-label={'Read more about us'}>{t('navigation.about')}</Link></li>
                                                            <li>
                                                                <Link href={getSectionHref('services')}       onClick={(e) => handleSectionClick(e, 'services')}  aria-label={'Read more about our services'}>{t('navigation.services')}</Link>
                                                            </li>
                                                            <li><Link href={"/" + currentLocale + "/contact"} aria-label={'Go to contact page'}>{t('navigation.contact')}</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>

                            {/* <!-- Mobile Menu  --> */}
                            <div className={`mobile-menu ${mobileMenu ? "mobile-menu-open" : ""}`}>
                                <nav className="menu-box">
                                    <div className={`close-btn ${mobileMenu ? "rotate" : ""}`} onClick={mobileMenuClose} ><i className="fas fa-times"></i></div>
                                    <div className="nav-logo">
                                        <Link href={"/" + currentLocale}><img src="/img/logo/logx-logo.png" alt={'Logo'}/></Link>
                                    </div>
                                    <div className="menu-outer">
                                        <ul className="navigation">
                                                <li onClick={mobileMenuClose}>
                                                    <Link href="/" aria-label={'Go to homepage'}>{t('navigation.home')}</Link>
                                                </li>
                                                <li onClick={mobileMenuClose}><Link href={getSectionHref('about')}       onClick={(e) => handleSectionClick(e, 'about')}  aria-label={'Read more about us'}>{t('navigation.about')}</Link></li>
                                                <li onClick={mobileMenuClose}>
                                                    <Link href={getSectionHref('services')}       onClick={(e) => handleSectionClick(e, 'services')}  aria-label={'Read more about our services'}>{t('navigation.services')}</Link>
                                                </li>
                                                <li onClick={mobileMenuClose}><Link href={"/" + currentLocale + "/contact"} aria-label={'Go to contact page'}>{t('navigation.contact')}</Link></li>
                                        </ul>
                                    </div>
                                    <div className="contact-info" style={{backgroundColor: "white", zIndex: "99999"}}>
                                        <div className="icon-box">
                                            <span className="icon-telephone-handle-silhouette"></span>
                                        </div>
                                        <p><Link href="tel:+385 99 819 9941">+385 99 819 9941</Link></p>
                                    </div>
                                    <div className="language-switcher">
                                        <LanguageSwitcher></LanguageSwitcher>
                                    </div>
                                </nav>
                            </div>
                            <div className={` ${mobileMenu ? "menu-backdrop" : ""}`} onClick={mobileMenuClose}></div>
                            {isOverlayActive && <div className="overlay" onClick={mobileMenuClose}></div>}
              
                        </div>
                    </div>
                </div>
            </div>
            <div className={`search-popup ${isActive ? 'active' : ''}`} id='home-one'>
                <div className="search-popup__overlay search-toggler" onClick={togglePopup}>
                    <div className="search-popup__close-icon">
                        <span className="icon-plus"></span>
                    </div>
                </div>
                <div className="search-popup__content">
                    <form action="#">
                        <label htmlFor="search" className="sr-only">search here</label>
                        <input type="text" id="search" placeholder="Search Here..." />
                        <button type="submit" aria-label="search submit" className="btn-box">
                            <i className="icon-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
            </div>
        </header>
    );
};

export default Header;