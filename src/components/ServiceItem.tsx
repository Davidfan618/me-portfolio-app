'use client';
import React from 'react';
import { ServiceItemProps } from '@/constant/props';
import './serviceItem.css';

export default function ServiceItem({ item }: { item: ServiceItemProps }) {
  return (
    <div
      className="col-lg-4 col-md-6 icon-box"
      data-aos="fade-up"
      data-aos-delay={item.delay}
    >
      <div className="icon">
        <i className={item.icon}></i>
      </div>
      <h4 className="title">
        <a href="">{item.name}</a>
      </h4>
      <p className="description">{item.brief}</p>
    </div>
  );
}
