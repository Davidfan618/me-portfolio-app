'use client';
import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { PortfolioItemProps } from '@/constant/props';
const InitGlightBox = dynamic(() => import('@/components/InitGlightBox'), {
  ssr: false,
});
import './portfolioItem.css';

export default function PortfolioItem({ item }: { item: PortfolioItemProps }) {
  return (
    <>
      <InitGlightBox />
      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src={item.thumnail} className="img-fluid" alt={item.title} />
          <div className="portfolio-links">
            <a
              href={item.thumnail}
              data-gallery="portfolioGallery"
              className="portfolio-lightbox"
              title={item.title}
            >
              <i className="bx bx-plus"></i>
            </a>
            <Link href={`/portfolio/${item._id}`} title="More Details">
              <i className="bx bx-link"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
