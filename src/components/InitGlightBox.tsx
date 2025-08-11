'use client';
import { useEffect } from 'react';
import Glightbox from 'glightbox';

export default function InitGlightBox() {
  useEffect(() => {
    Glightbox({
      selector: '.portfolio-lightbox',
    });
  }, []);

  return null;
}
