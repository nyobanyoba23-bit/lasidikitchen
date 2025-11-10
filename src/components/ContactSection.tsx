import React from 'react';
import '../styles/components/_contact-section.scss';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { BsShop } from 'react-icons/bs';

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-text">
          Ready to experience the delight? Find us on social media or send us an email!
        </p>
        <div className="contact-links">
                        <a href="https://wa.me/6282259926183" className="contact-link-item" target="_blank" rel="noopener noreferrer">
                          {/* @ts-ignore */}
                          <FaWhatsapp className="contact-icon" />
                          <span>WhatsApp</span>
                        </a>
                        <a href="https://www.instagram.com/lasidi_kitchen?igsh=MWxnbWJibDJtd3Z0bw==" className="contact-link-item" target="_blank" rel="noopener noreferrer">
                          {/* @ts-ignore */}
                          <FaInstagram className="contact-icon" />
                          <span>Instagram</span>
                        </a>
                        <a href="https://www.tokopedia.com/lasidikitchen" className="contact-link-item" target="_blank" rel="noopener noreferrer">
                          {/* @ts-ignore */}
                          <BsShop className="contact-icon" />
                          <span>Tokopedia</span>
                        </a>        </div>
      </div>
    </section>
  );
};

export default ContactSection;
