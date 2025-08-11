'use client';
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { PortfolioItemProps } from '@/constant/props';
import './portfolioDetails.css';

export default function PortfolioDetails({
  portfolio,
}: {
  portfolio: PortfolioItemProps;
}) {
  const [text, setText] = useState('');
  const urlIdentifier = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url) {
      return `<a target="_blank" href="${url}">${url}</a>`;
    });
  };

  useEffect(() => {
    if (portfolio) setText(urlIdentifier(portfolio.description));
  }, [portfolio]);

  return (
    <section id="portfolio-details" className="portfolio-details">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-8">
            <Swiper
              spaceBetween={0}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              loop={true}
              className="portfolio-details-slider"
            >
              {portfolio.images &&
                portfolio.images.length > 0 &&
                portfolio.images.map((item, index: number) => (
                  <SwiperSlide key={index}>
                    <img src={item.image} alt="" />
                  </SwiperSlide>
                ))}
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>

          <div className="col-lg-4">
            <div className="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li>
                  <strong>Name</strong>: {portfolio.name}
                </li>
                <li>
                  <strong>Category</strong>: {portfolio.category}
                </li>
                <li>
                  <strong>Project date</strong>:{' '}
                  {portfolio.projectDate &&
                    portfolio.projectDate.substring(0, 10)}
                </li>
                <li>
                  <strong>Project URL</strong>:{' '}
                  <a target="_blank" href={portfolio.projectUrl}>
                    Click here
                  </a>
                </li>
              </ul>
            </div>
            <div className="portfolio-description">
              <h2>{portfolio.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: text }}></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
