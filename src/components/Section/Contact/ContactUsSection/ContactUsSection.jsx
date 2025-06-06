"use client"
import Link from "next/link";
import {useTranslations} from "next-intl";
import {useState} from "react";
import emailjs from '@emailjs/browser';

const ContactUsSection = () => {
    const t = useTranslations();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        company: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [responseType, setResponseType] = useState(''); // 'success' or 'error'

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResponseMessage('');

        try {
            // EmailJS configuration
            const serviceId = 'service_1bilyoo';
            const templateId = 'template_uxt7ny9';
            const publicKey = 'e2TEgDYZKVvQo6PXZ';

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.number || 'Not provided',
                company: formData.company || 'Not provided',
                message: formData.message,
                current_date: new Date().toLocaleDateString(),
                current_time: new Date().toLocaleTimeString(),
            };

            const result = await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            console.log('EmailJS result:', result);

            setResponseType('success');
            setResponseMessage(t('contact.form-email-submitted'));

            // Reset form
            setFormData({
                name: '',
                email: '',
                number: '',
                company: '',
                message: ''
            });

        } catch (error) {
            console.error('EmailJS error:', error);
            setResponseType('error');
            setResponseMessage('Failed to send email. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                                    <h5>{t('contact.contact-subtitle')}</h5>
                                </div>
                                <h2>{t('contact.contact-title')}</h2>
                            </div>

                            <ul>
                                <li>
                                    <div className="icon-box">
                                        <span className="icon-telephone-call"></span>
                                    </div>
                                    <div className="text-boxes flex">
                                        <div className="text-box">
                                            <p>{t('contact.contact-call')}</p>
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
                                        <p>{t('contact.contact-office')}</p>
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
                                            <p>{t('contact.contact-mail')}</p>
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
                                        <p>{t('contact.contact-available')}</p>
                                        <h2>{t('contact.contact-hours')} <br/>
                                            08:00 - 16:00</h2>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-7">
                        <div className="contact-page__form-box">
                            <div className="title">
                                <h2>{t('contact.form-title')}</h2>
                            </div>

                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <input type="text" placeholder={t('contact.form-name')} name="name"
                                                   value={formData.name}
                                                   onChange={handleInputChange}
                                                   required
                                                   disabled={isSubmitting}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <input type="email" placeholder={t('contact.form-email')} name="email"
                                                   value={formData.email}
                                                   onChange={handleInputChange}
                                                   required
                                                   disabled={isSubmitting}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <input type="number" placeholder={t('contact.form-phone')} name="number"
                                                   value={formData.number}
                                                   onChange={handleInputChange}
                                                   required
                                                   disabled={isSubmitting}/>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <input type="text" placeholder={t('contact.form-company')} name="company"
                                                   value={formData.company}
                                                   onChange={handleInputChange}
                                                   required
                                                   disabled={isSubmitting}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="contact-page__input-box">
                        <textarea name="message" placeholder={t('contact.form-message')} value={formData.message}
                                  onChange={handleInputChange}
                                  required
                                  disabled={isSubmitting}></textarea>
                                        </div>
                                        <div className="contact-page__btn">
                                            <button type="submit" className="thm-btn"
                                                    data-loading-text="Molimo pričekajte...">
                                                <span className="txt">{t('contact.form-button')}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            {/* Display response message */}
                            {responseMessage && (
                                <p className={`ajax-response mb-0 ${responseType === 'success' ? 'text-success' : 'text-danger'}`}>
                                    {responseMessage}
                                </p>
                            )}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;
