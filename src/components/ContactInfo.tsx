'use client';
import React from 'react';
import './contactInfo.css';

export default function ContactInfo() {
  return (
    <>
      <div className="info">
        <div className="address">
          <i className="bi bi-geo-alt"></i>
          <h4>Location:</h4>
          <p>S4 Level 7, 243 Edward St., Brisbane, 4000</p>
        </div>

        <div className="email">
          <i className="bi bi-envelope"></i>
          <h4>Email:</h4>
          <p>davidfan618@gmail.com</p>
        </div>

        <div className="phone">
          <i className="bi bi-phone"></i>
          <h4>Call:</h4>
          <p>+61 411 356 263</p>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.05563466838!2d153.02400257658235!3d-27.46752727632096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a1ccd2ef7af%3A0x9fea0cd7bf402664!2s243%20Edward%20St%2C%20Brisbane%20City%20QLD%204000!5e0!3m2!1sen!2sau!4v1735558175420!5m2!1sen!2sau"
          style={{ border: 0, width: '100%', height: '290px' }}
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
