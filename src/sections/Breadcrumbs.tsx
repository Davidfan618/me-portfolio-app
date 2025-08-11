'use client';
import React from 'react';
import Link from 'next/link';
import { BreadcrumbsItemProps } from '@/constant/props';
import './breadcrumbs.css';

export default function Breadcrumbs({ item }: { item: BreadcrumbsItemProps }) {
  return (
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>{item.page}</h2>
          <ol>
            <li>
              <Link href="/">
                {item.prevPage === 'Home' ? (
                  <i className="bx bx-home"></i>
                ) : (
                  item.prevPage
                )}
              </Link>
            </li>
            <li>{item.page}</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
