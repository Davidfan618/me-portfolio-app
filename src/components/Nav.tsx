'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { navs } from '../data/data';
import './nav.css';

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [navList, setNavList] = useState(navs);
  const [scroll, setScroll] = useState(0);

  const handleToggleMenu = () => {
    setOpen(!open);
    const body: HTMLElement = document.querySelector('body')!;
    body.classList.toggle('mobile-nav-active');
  };

  const handleNavActive = () => {
    const position = scroll + 200;
    //nav add and remove class active
    setNavList(
      navList.map(nav => {
        nav.active = false;
        const targetSection: HTMLElement = document.querySelector(
          '#' + nav.target
        )!;

        if (
          targetSection &&
          position >= targetSection.offsetTop &&
          position <= targetSection.offsetTop + targetSection.offsetHeight
        ) {
          nav.active = true;
        }
        return nav;
      })
    );
  };

  const handleScrollTo = (section: string) => {
    const targetEl: HTMLElement = document.querySelector('#' + section)!;
    if (pathname === '/') {
      const elementPosition = targetEl.offsetTop;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    } else {
      router.push(`/#${section}`);
    }
  };

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

  useEffect(() => {
    handleNavActive();
  }, [scroll]);

  return (
    <nav id="navbar" className="navbar nav-menu">
      <ul>
        {navList.map(nav => (
          <li key={nav.id}>
            <a
              onClick={() => handleScrollTo(nav.target)}
              className={`nav-link scrollto ${
                nav.active ? 'active' : undefined
              }`}
            >
              <i className={nav.icon}></i> <span>{nav.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <i
        className={`${
          open ? 'bi bi-x' : 'bi bi-list'
        } mobile-nav-toggle d-lg-none`}
        onClick={handleToggleMenu}
      ></i>
    </nav>
  );
}
