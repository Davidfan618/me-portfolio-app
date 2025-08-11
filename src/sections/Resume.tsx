'use client';
import React, { useState, useEffect } from 'react';
import { ResumeProps } from '../constant/props';
import { ResumeItemProps } from '@/constant/props';
import SectionTitle from '@/components/SectionTitle';
import ResumeItem from '@/components/ResumeItem';
import './resume.css';

export default function Resume() {
  const [items, setItems] = useState<ResumeProps[]>([]);

  const getResumeData = () => {
    fetch('/api/resume')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    getResumeData();
  }, []);

  return (
    <section id="resume" className="resume">
      <div className="container">
        <SectionTitle
          item={{
            title: 'Resume',
            description: `Explore my professional journey as a Full Stack Web Developer, 
            highlighting my expertise in building dynamic, responsive applications. 
            This section includes details on my education, key projects, 
            technical skills, and work experience, showcasing my commitment to 
            continuous growth and innovation in web development.`,
          }}
        />
        {items && items.length > 0 && (
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">{items[0].category}</h3>
              {items &&
                items.length > 0 &&
                items[0].content.map((item: ResumeItemProps) => (
                  <ResumeItem key={item.id} item={item} />
                ))}

              <h3 className="resume-title">{items[1].category}</h3>
              {items &&
                items.length > 0 &&
                items[1].content.map((item: ResumeItemProps) => (
                  <ResumeItem key={item.id} item={item} />
                ))}
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">{items[2].category}</h3>
              {items &&
                items.length > 0 &&
                items[2].content.map((item: ResumeItemProps) => (
                  <ResumeItem key={item.id} item={item} />
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
