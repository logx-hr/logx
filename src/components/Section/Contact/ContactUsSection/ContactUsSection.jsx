import Link from "next/link";

const ContactUsSection = () => {
    return (
        <section className="contact-page padding">
            <div className="shape1 float-bob-y"><img src="/img/shape/contact-page-shape1.webp" alt="Background shape" /></div>
            <div className="shape2 float-bob-y"><img src="/img/shape/contact-page-shape2.png" alt="Background shape" /></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="contact-page__contact-info">
                            <div className="sec-title-style3">
                                <div className="sub-title">
                                    <div className="icon">
                                        <img src="/img/icon/title-marker-4.png" alt="Title marker" />
                                    </div>
                                    <h5>Stupite u kontakt</h5>
                                </div>
                                <h2>Kontaktirajte nas</h2>
                            </div>

                            <ul>
                                <li>
                                    <div className="icon-box">
                                        <span className="icon-telephone-call"></span>
                                    </div>
                                    <div className="text-boxes flex">
                                        <div className="text-box">
                                            <p>Nazovite nas</p>
                                            Klementina Furjan, CEO, Logistics Manager
                                            <h2><Link href="tel:+385998199942">+385 99 819 9941</Link></h2>
                                        </div>
                                        <div className="text-box">
                                            Ines Jambrek Ploh, Logistics Manager
                                            <h2><Link href="tel:+385998199942">+385 99 819 9942</Link></h2>
                                        </div>
                                        <div className="text-box">
                                            Nikolina Trakoštanec, Logistics Manager
                                            <h2><Link href="tel:+385998188812">+385 99 818 8812</Link></h2>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon-box">
                                        <span className="icon-location"></span>
                                    </div>

                                    <div className="text-box">
                                        <p>Lokacija ureda</p>
                                        Damir Furjan, vlasnik
                                        <h2>Splitska 8, 42000 <br/> Varaždin</h2>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon-box">
                                        <span className="icon-email"></span>
                                    </div>

                                    <div className="text-boxes flex">
                                        <div className="text-box">
                                            <p>Pošaljite nam e-mail</p>
                                            Klementina Furjan, CEO, Logistics Manager
                                            <h2><Link
                                                href="mailto:klementina.furjan@logx.hr">klementina.furjan@logx.hr</Link>
                                            </h2>
                                        </div>
                                        <div className="text-box">
                                            Ines Jambrek Ploh, Logistics Manager
                                            <h2><Link
                                                href="mailto:ines.jambrek-ploh@logx.hr">ines.jambrek-ploh@logx.hr</Link>
                                            </h2>
                                        </div>
                                        <div className="text-box">
                                            Nikolina Trakoštanec, Logistics Manager
                                            <h2><Link
                                                href="mailto:nikolina.trakostanec@logx.hr">nikolina.trakostanec@logx.hr</Link>
                                            </h2>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon-box">
                                        <span className="icon-time"></span>
                                    </div>

                                    <div className="text-box">
                                        <p>Radno vrijeme</p>
                                        <h2>Ponedjeljak - Petak <br/>
                                            08:00 - 16:00</h2>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-7">
                        <div className="contact-page__form-box">
                            <div className="title">
                                <h2>Slobodno nam pišite</h2>
                            </div>

                            <form id="contact-form" action="/inc/mail.php" method="POST">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <input type="text" placeholder="Puno ime" name="name" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <input type="email" placeholder="E-mail" name="email" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <input type="number" placeholder="Mobitel" name="number" />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <input type="text" placeholder="Tvrtka" name="company" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <textarea name="message" placeholder="Poruka"></textarea>
                                        </div>
                                        <div className="contact-page__btn">
                                            <button type="submit" className="thm-btn" data-loading-text="Molimo pričekajte...">
                                                <span className="txt">Pošalji poruku</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <p className="ajax-response mb-0"></p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;