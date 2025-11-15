'use client';

import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css'
import Image from 'next/image.js'

export default function SimpleGallery(props) {
  
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
        gallery: '#' + props.galleryID,
        children: 'a',
        pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
        lightbox.destroy();
        lightbox = null;
    };
  }, []);

  return (
    <div className="pswp-gallery grid-cols-5 grid gap-4" id={props.galleryID}>
      {props.images.map((image, index) => (
        <a
          className=""
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-hight={image.height}
          key={props.galleryID + '-' + index}
          target="blank"
          rel="noreferrer"
        >
          <Image
            className={`rounded hover:brightness-110 hover:contrast-150 contrast-125 brightness-105`}
            src={image.largeURL}
            width={image.width}
            height={image.height}
            alt={image.alt}
          />
        </a>
      ))}
    </div>
  );
}