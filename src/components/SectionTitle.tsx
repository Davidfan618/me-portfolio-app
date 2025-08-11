'use client';
import React from 'react';
import './sectionTitle.css';
import { SectionTitleItemProps } from '@/constant/props';

export default function SectionTitle({
  item,
}: {
  item: SectionTitleItemProps;
}) {
  return (
    <div className="section-title">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
}
