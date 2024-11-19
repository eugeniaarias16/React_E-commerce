// Banner.jsx
import React from 'react';
import { BannerBox, CarouselImagesBox } from './index';
import { useCarousel } from '../../hooks/useCarousel';

const Images = [
  {
    id: 1,
    img: '/assets/Carrousel/C1.webp', // Ajusté la ruta para que no incluya 'public'
    title: 'Beauty',
    link: '/categories/beauty',
  },
  {
    id: 2,
    img: '/assets/Carrousel/C2.webp',
    title: 'Beauty',
    link: '/categories/beauty',
  },
  {
    id: 3,
    img: '/assets/Carrousel/C3.webp',
    title: 'Beauty',
    link: '/categories/beauty',
  },
  {
    id: 4,
    img: '/assets/Carrousel/C4.webp',
    title: 'Beauty',
    link: '/categories/beauty',
  },
  {
    id: 5,
    img: '/assets/Carrousel/C5.webp',
    title: 'Beauty',
    link: '/categories/beauty',
  },
  {
    id: 6,
    img: '/assets/Carrousel/C6.webp',
    title: 'Electronics',
    link: '/categories/electronics',
  },
  {
    id: 7,
    img: '/assets/Carrousel/C7.webp',
    title: 'Home',
    link: '/categories/home',
  },
  {
    id: 8,
    img: '/assets/Carrousel/C8.webp',
    title: 'Men',
    link: '/categories/men',
  },
  {
    id: 9,
    img: '/assets/Carrousel/C9.webp',
    title: 'Men',
    link: '/categories/men',
  },
  {
    id: 10,
    img: '/assets/Carrousel/C10.webp',
    title: 'Woman',
    link: '/categories/woman',
  },
  {
    id: 11,
    img: '/assets/Carrousel/C11.webp',
    title: 'Woman',
    link: '/categories/woman',
  },
];

export const Banner = () => {
  const { currentIndex, previous, next } = useCarousel(Images);

  return (
    <BannerBox>
      {Images.map((image, index) => (
        <CarouselImagesBox
          key={image.id}
          id={image.id}
          img={image.img}
          link={image.link}
          title={image.title}
          previous={() => previous(currentIndex)}
          next={() => next(currentIndex)}
          isVisible={index === currentIndex}
        />
      ))}
    </BannerBox>
  );
};