import { Button, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { colorTheme } from '../../styles/colors';

// Estilos con styled-components
export const CarouselContainer = styled(Flex)`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${colorTheme.platinum};
  box-shadow: 0 4px 8px ${colorTheme.darkGreen80}; /* Sombra usando color semitransparente */
`;

export const ArrowButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${colorTheme.darkGreen80};
  color: ${colorTheme.platinum};
  padding: 6px; 
  border-radius: 50%;
  cursor: pointer;
  border: none;
  opacity: 0.6; 
  transition: background-color 0.3s ease, opacity 0.3s ease;
  ${(props) => props.position}: 10px;

  &:hover {
    background-color: ${colorTheme.tealGreen}; /* Cambio sutil en hover */
    opacity: 1; /* Aumenta la opacidad en hover */
  }

  &:focus {
    outline: none;
  }
`;

export const ImageContainer = styled(Flex)`
  width: 100%;
  max-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 4px 8px ${colorTheme.darkGreen80}; /* Sombra para la imagen */
  transition: transform 0.3s ease; /* Transición para efecto de escala */

  &:hover {
    transform: scale(1.05); /* Efecto de zoom al pasar el cursor */
  }
`;
