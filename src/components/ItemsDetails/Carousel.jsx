import React, { useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import {CarouselContainer,ImageContainer,ArrowButton,Image} from './index'
import { useCarousel } from '../../hooks/useCarousel';

export const Carousel = ({ item }) => {
  const images = Array.isArray(item?.images) ? item.images : [];


  const { currentIndex, previous, next } = useCarousel(images);
  
  // Si no hay imágenes, mostramos un mensaje
  if (images.length === 0) {
    return <p>No hay imágenes disponibles para este producto.</p>;
  }
  useCarousel(images);

  return (
    <CarouselContainer>
      <ArrowButton onClick={previous} position="left">
        <BiLeftArrowAlt />
      </ArrowButton>

      <ImageContainer>
        <Image src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </ImageContainer>

      <ArrowButton onClick={next} position="right">
        <BiRightArrowAlt />
      </ArrowButton>
    </CarouselContainer>
  );
};


