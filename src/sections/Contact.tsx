'use client';
import React from 'react';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import SectionTitle from '@/components/SectionTitle';
import './contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionTitle
          item={{
            title: 'Contact',
            description: `Get in touch to discuss your web development needs or potential projects. 
            I’m available for consultations, collaborations, and inquiries, and look forward to 
            helping bring your ideas to life.`,
          }}
        />

        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <ContactInfo />
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
