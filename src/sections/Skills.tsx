'use client';
import React, { useState, useEffect } from 'react';
import ProgressBar from '@/components/ProgressBar';
import { skillsData } from '@/data/data';
import SectionTitle from '@/components/SectionTitle';
import './skills.css';

export default function Skills() {
  const [scroll, setScroll] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  const handleSectionActive = (section: string) => {
    const sectionPosition: HTMLElement = document.querySelector(section)!;
    const position = scroll + 500;
    if (
      position >= sectionPosition.offsetTop &&
      position <= sectionPosition.offsetTop + sectionPosition.offsetHeight
    ) {
      setActive(true);
    }
  };

  useEffect(() => {
    handleSectionActive('#skills');
  }, [scroll]);

  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <SectionTitle
          item={{
            title: 'Skills',
            description: `Full Stack Web Developer with expertise in front-end technologies
            (React.js, HTML, CSS, JavaScript) and back-end development (Node.js,
            Python). Proficient in UI/UX design, SQL/NoSQL databases, and
            building scalable, responsive applications. Focused on delivering
            high-quality, user-centric solutions.`,
          }}
        />

        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            {skillsData.slice(0, 6).map(skill => (
              <ProgressBar key={skill.id} status={active} item={skill} />
            ))}
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            {skillsData.slice(6, 12).map(skill => (
              <ProgressBar key={skill.id} status={active} item={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
