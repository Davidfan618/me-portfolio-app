// import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.css';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// import glightbox
import 'glightbox/dist/css/glightbox.css';
// import aos css
import 'aos/dist/aos.css';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTopBtn from '@/components/BackToTopBtn';
import { Suspense } from 'react';
import Preloader from '@/components/Preloader';
import './globals.css';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'David Portfolio',
  description: 'Full Stack Developer David Fan, Profile Portfolio Website',
  icons: {
    icon: '/favicon.png', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Suspense fallback={<Preloader />}>
          <Header />
          {children}
          <Footer />
          <BackToTopBtn />
        </Suspense>
      </body>
    </html>
  );
}
