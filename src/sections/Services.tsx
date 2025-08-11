'use client';
import React, { useState, useEffect } from 'react';
import SectionTitle from '@/components/SectionTitle';
import ServiceItem from '@/components/ServiceItem';
import { ServiceItemProps } from '@/constant/props';

export default function Services() {
  const [items, setItems] = useState<ServiceItemProps[]>([]);

  const getServicesData = () => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    getServicesData();
  }, []);

  return (
    <section id="services" className="services">
      <div className="container">
        <SectionTitle
          item={{
            title: 'Services',
            description: `I offer comprehensive full-stack web development services, 
            including custom website design, application development, 
            UI/UX design, and database management. From concept to deployment, 
            I provide scalable and user-centric solutions tailored to your business needs.`,
          }}
        />

        <div className="row">
          {items &&
            items.length > 0 &&
            items.map((item: ServiceItemProps) => (
              <ServiceItem key={item.id} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
}
