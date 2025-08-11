'use client';
import React from 'react';
import CountUp from 'react-countup';
import { CounterItemProps } from '@/constant/props';

export default function Counter({ item }: { item: CounterItemProps }) {
  return (
    <div
      className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
      data-aos="fade-up"
      data-aos-delay={item.delay}
    >
      <div className="count-box">
        <i className={item.icon}></i>
        <CountUp start={0} end={item.end} duration={item.duration} />
        <p>
          <strong>{item.name}</strong> <br />
          {item.brief}
        </p>
      </div>
    </div>
  );
}
