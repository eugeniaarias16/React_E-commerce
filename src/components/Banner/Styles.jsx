import { Box, Flex } from '@chakra-ui/react';
import styled from 'styled-components';
import {colorTheme} from '../../styles/colors'

export const BannerBox = styled(Box)`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: max-content;

`;

export const CarouselContainer = styled(Box)`
  position: relative;
  text-align: center;
  height: auto;
`;

export const CarouselImgs = styled(Box)`
  img {
    width: 100%;
    height: 100%;
    max-height: 100vh;
    object-fit: cover;
    mask-image: linear-gradient(
      black 80%,
      transparent
    );
  }
`;

export const CarouselControls = styled(Flex)`
  position: absolute;
  top: 50%;
  width: 100%;
  justify-content: space-between;
  transform: translateY(-50%);
  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    color: ${colorTheme.darkGreen};
    &:hover {
      color: #aaa;
    }
  }
`;

export const CarouselTitle = styled.h2`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 1.5rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
`;
