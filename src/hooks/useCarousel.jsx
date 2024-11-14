import React, { useState } from 'react';

export const useCarousel = (images) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const next = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Devuelve solo las funciones y valores necesarios
  return { currentIndex, previous, next };
};
