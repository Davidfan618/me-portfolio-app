'use client';
import React from 'react';
import { counterData } from '@/data/data';
import Counter from '@/components/Counter';
import SectionTitle from '@/components/SectionTitle';
import './facts.css';

export default function Facts() {
  return (
    <section id="facts" className="facts">
      <div className="container">
        <SectionTitle
          item={{
            title: 'Facts',
            description: `Experienced in developing scalable web applications using both
            front-end and back-end technologies. Committed to clean code,
            performance optimization, and delivering solutions that enhance user
            experience across various industries.`,
          }}
        />
        <div className="row no-gutters">
          {counterData.map(item => (
            <Counter key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
