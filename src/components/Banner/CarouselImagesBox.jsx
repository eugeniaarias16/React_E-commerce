import React from 'react';
import { CarouselContainer, CarouselControls, CarouselTitle, CarouselImgs } from './Styles';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

export const CarouselImagesBox = ({
  id,
  link,
  img,
  title,
  previous,
  next,
  isVisible,
}) => {
  return (
    <CarouselContainer style={{ display: isVisible ? "block" : "none" }}>
      <CarouselImgs>
        <a href={link}>
          <img src={img} alt={`Slide ${id}`} />
        </a>
      </CarouselImgs>
      <CarouselControls>
        <button onClick={previous}>
          <MdArrowBackIosNew />
        </button>
        <button onClick={next}>
          <MdArrowForwardIos />
        </button>
      </CarouselControls>
      <CarouselTitle>{title}</CarouselTitle>
    </CarouselContainer>
  );
};
