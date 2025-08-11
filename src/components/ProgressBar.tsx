'use client';
import React from 'react';
import { ProgressBarItemProps } from '@/constant/props';

export default function ProgressBar({
  item,
  status,
}: {
  item: ProgressBarItemProps;
  status: boolean;
}) {
  return (
    <div className="progress">
      <span className="skill">
        {item.name} <i className="val">{item.percentage}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          style={status ? { width: item.percentage + '%' } : { width: '1px' }}
        ></div>
      </div>
    </div>
  );
}
