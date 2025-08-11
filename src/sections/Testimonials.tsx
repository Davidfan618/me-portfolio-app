'use client';

import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import { TestimonialItemProps } from '@/constant/props';
import SectionTitle from '@/components/SectionTitle';
import TestimonialItem from '@/components/TestimonialItem';
import './testimonials.css';

export default function Testimonials() {
  const [slides, setSlides] = useState<TestimonialItemProps[]>([]);

  const getTestimonialsData = () => {
    fetch('/api/testimonials')
      .then(res => res.json())
      .then(data => setSlides(data))
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    getTestimonialsData();
  }, []);

  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container">
        <SectionTitle
          item={{
            title: 'Testimonials',
            description: `Read feedback from clients and collaborators who have experienced 
            the impact of my full-stack web development services. Their stories highlight 
            my commitment to delivering high-quality, reliable, and user-focused solutions.`,
          }}
        />

        <div
          className="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Swiper
            slidesPerView={'auto'}
            speed={600}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay, Pagination]}
            loop={true}
            className="testimonials-slider swiper"
          >
            {slides &&
              slides.length > 0 &&
              slides.map((slide: TestimonialItemProps) => (
                <SwiperSlide key={slide.id}>
                  <TestimonialItem item={slide} />
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
