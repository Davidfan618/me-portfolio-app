'use client';
import React from 'react';
import { ResumeItemProps } from '@/constant/props';
import './resumeItem.css';

export default function ResumeItem({ item }: { item: ResumeItemProps }) {
  return (
    <div className="resume-item">
      <h4>{item.title}</h4>
      {item.period && <h5>{item.period}</h5>}
      <p>
        <em>{item.brief}</em>
      </p>
      {item.description && <p>{item.description}</p>}
      <ul>
        {item.details &&
          item.details.length > 0 &&
          item.details.map((line, index) => <li key={index}>{line}</li>)}
      </ul>
    </div>
  );
}
