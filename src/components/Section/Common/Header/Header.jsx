"use client";
import { useEffect, useState } from "react";
import Link from "next/link";


const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [home, setHome] = useState(false);
    const [service, setService] = useState(false);
    const [page, setPage] = useState(false);
    const [blog, setBlog] = useState(false);
    const [scrollClassName, setScrollClassName] = useState("");
    const [isOverlayActive, setIsOverlayActive] = useState(false);
  
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
                                                                        <Link href="mailto:info@logx.hr">info@logx.hr</Link>
                                                                    </p>
                                                                </li>
                                                                <li>
                                                                    <div className="icon-box">
                                                                        <span className="icon-out-call"></span>
                                                                    </div>
                                                                    <p>
                                                                        <Link href="tel:+385998199941">+385 99 819 9941</Link>
                                                                    </p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="main-header-one__top-right">
                                                        <div className="inner">
                                                            <div className="header-social-links">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="#"><span className="icon-facebook"></span></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="#"><span className="icon-twitter"></span></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="#"><span className="icon-instagram"></span></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="#"><span className="icon-linkedin"></span></Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="main-header-one__bottom">
                                                <div className="main-header-one__bottom-left">
                                                    <div className="navbar-wrap main-menu">
                                                        <ul className="navigation">
                                                            <li>
                                                                <Link href="/">Početna</Link>
                                                            </li>
                                                            <li><Link href="/#about">O nama</Link></li>
                                                            <li>
                                                                <Link href="/#services">Usluge</Link>
                                                            </li>
                                                            <li><Link href="contact">Kontakt</Link></li>
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
                                        <Link href="/"><img src="/img/logo/logx-logo.png" /></Link>
                                    </div>
                                    <div className="menu-outer">
                                        <ul className="navigation">
                                                <li onClick={mobileMenuClose}>
                                                    <Link href="/">Početna</Link>
                                                </li>
                                                <li onClick={mobileMenuClose}><Link href="/#about">O nama</Link></li>
                                                <li onClick={mobileMenuClose}>
                                                    <Link href="/#services">Usluge</Link>
                                                </li>
                                                <li onClick={mobileMenuClose}><Link href="contact">Kontakt</Link></li>
                                        </ul>
                                    </div>
                                    <div className="contact-info" style={{backgroundColor: "white", zIndex: "99999"}}>
                                        <div className="icon-box">
                                            <span className="icon-telephone-handle-silhouette"></span>
                                        </div>
                                        <p><Link href="tel:+385 99 819 9941">+385 99 819 9941</Link></p>
                                    </div>
                                    <div className="social-links" style={{backgroundColor: "white", zIndex: "99999"}}>
                                        <ul className="clearfix list-wrap"
                                            style={{backgroundColor: "white", zIndex: "99999"}}>
                                            <li>
                                                <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                            </li>
                                            <li>
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            </li>
                                            <li>
                                                <Link href="#"><i className="fab fa-instagram"></i></Link>
                                            </li>
                                            <li>
                                                <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                            </li>
                                            <li>
                                                <Link href="#"><i className="fab fa-youtube"></i></Link>
                                            </li>
                                        </ul>
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