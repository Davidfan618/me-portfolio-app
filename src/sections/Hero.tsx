'use client';
import React, { useEffect } from 'react';
// import AOS
import AOS from 'aos';
// import react-typed
import { ReactTyped } from 'react-typed';
import './hero.css';

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <h1>David Fan</h1>
        <p>
          I&apos;m a{' '}
          <ReactTyped
            strings={['Designer', 'Developer', 'Data Analyst', 'Freelancer']}
            typeSpeed={100}
            backSpeed={50}
            backDelay={2000}
            loop
            className="typed"
          />
        </p>
      </div>
    </section>
  );
}
