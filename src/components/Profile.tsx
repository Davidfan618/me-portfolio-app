'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { profileData } from '@/data/data';
import profileImage from '../../public/assets/img/profile-img.jpg';
import './profile.css';

export default function Profile() {
  return (
    <div className="profile">
      <Image src={profileImage} alt="" className="img-fluid rounded-circle" />
      <h1 className="text-light">
        <Link href="/">David Fan</Link>
      </h1>
      <div className="social-links mt-3 text-center">
        {profileData.map(item => (
          <Link
            key={item.id}
            target="_blank"
            href={item.url}
            className={item.social}
          >
            <i className={item.icon}></i>
          </Link>
        ))}
      </div>
    </div>
  );
}
