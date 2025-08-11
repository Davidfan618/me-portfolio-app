'use client';

import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Facts from '@/sections/Facts';
import Hero from '@/sections/Hero';
import Portfolio from '@/sections/Portfolio';
import Resume from '@/sections/Resume';
import Services from '@/sections/Services';
import Skills from '@/sections/Skills';
import Testimonials from '@/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
