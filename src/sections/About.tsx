'use client';
import React from 'react';
import './about.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
            A highly motivated website and app designer, developer, and data
            analyst with a strong passion for creating innovative web and mobile
            applications and uncovering valuable insights from data.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img
              src="/assets/img/profile-img-2.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Website/App Designer &amp; Developer</h3>
            <p className="fst-italic">
              Provide individual and business IT solution - to infinity and
              beyond
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>Birthday:</strong> <span>18 June</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>Website:</strong> <span>www.dstudiotech.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>Phone:</strong> <span>+61 411 356 263</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>City:</strong> <span>Brisbane, Australia</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>Experience:</strong> <span>10 Year+</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>Degree:</strong> <span>Master of IT</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>Email:</strong> <span>davidfan618@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Extensive education and experience in application development have
              equipped me with advanced technical expertise, including: Data
              Analytics and Tools: Proficient in Excel, SQL, Python (DB
              Libraries), R, Power BI, Stata, SSIS, MSSQL, and ETL processes.
              UI/UX Design: Skilled in Adobe Creative Suite (Photoshop,
              Illustrator, XD, Premiere Pro). Full Stack Development: Expertise
              in HTML5, CSS/SCSS, JavaScript (ES6+), React.js, Next.js, Vue.js,
              Redux, Node.js, Express.js, PHP, Python (Flask & Django), C#, and
              Java. Database Management: Adept at managing both SQL databases
              (e.g., MySQL) and NoSQL databases (e.g., MongoDB).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
