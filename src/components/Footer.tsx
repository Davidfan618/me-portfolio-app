'use client';
import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          &copy; Copyright{' '}
          <strong>
            <span>David Fan</span>
          </strong>
        </div>
        <div className="credits">
          Designed by{' '}
          <a target="_blank" href="https://www.dstudiotech.com/">
            DStudio Technology
          </a>
        </div>
      </div>
    </footer>
  );
}
