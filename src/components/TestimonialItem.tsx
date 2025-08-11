'use client';
import React from 'react';
import { TestimonialItemProps } from '@/constant/props';
import './testimonialItem.css';

export default function TestimonialItem({
  item,
}: {
  item: TestimonialItemProps;
}) {
  return (
    <div
      className="testimonial-item"
      data-aos="fade-up"
      data-aos-delay={item.delay}
    >
      <p>
        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
        {item.content}
        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
      </p>
      <img src={item.avatar} className="testimonial-img" alt="" />
      <h3>{item.client}</h3>
      <h4>{item.position}</h4>
    </div>
  );
}
