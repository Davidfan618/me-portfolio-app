'use client';
import React from 'react';
import Nav from './Nav';
import Profile from './Profile';
import './header.css';

export default function Header() {
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <Profile />
        <Nav />
      </div>
    </header>
  );
}
