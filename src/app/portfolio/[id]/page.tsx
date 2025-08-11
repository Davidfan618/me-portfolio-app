'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Breadcrumbs from '@/sections/Breadcrumbs';
import PortfolioDetails from '@/sections/PortfolioDetails';
import Preloader from '@/components/Preloader';
import { PortfolioItemProps } from '@/constant/props';

export default function PortfolioDetailsPage() {
  const params = useParams<{ id: string }>();
  const { id } = params;
  const [item, setItem] = useState<PortfolioItemProps>();

  const getPortfolioDetailsData = (id: string) => {
    fetch(`https://dstudio-tech-app.herokuapp.com/api/portfolios/${id}`)
      .then(res => res.json())
      .then(data => setItem(data))
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    getPortfolioDetailsData(id);
  }, [id]);

  return (
    <main id="main">
      <Breadcrumbs
        item={{
          page: 'Portfolio Details',
          prevPage: 'Home',
        }}
      />
      {!item ? <Preloader /> : <PortfolioDetails portfolio={item} />}
    </main>
  );
}
