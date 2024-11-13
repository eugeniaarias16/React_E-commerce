import {  Container, Link,Box } from "@chakra-ui/react";
import styled from "styled-components";
import { colorTheme } from "../../styles/colors";



export const SectionCategdBox= styled(Box)`
  width: 90%;
  margin: auto;
  margin: 100px auto;
  min-height: min-content;
  overflow-x: scroll;
  scrollbar-color: ${colorTheme.darkGreen} ${colorTheme.tealGreen};
  scrollbar-width: thin;
  scroll-behavior: smooth;

`;

export const CategoriesContainer = styled(Container)`
width: max-content;
padding: 50px;
height:100%;
display: flex;
overflow-x: auto;
gap: 20px;

`;


export const CategoryCardLink = styled(Link)`
  width: 300px;
  height: 200px;
  border-radius: 20px;
  border: solid 0.3px ${colorTheme.tealGreen};
  box-shadow: -4px 6px 12px 0px ${colorTheme.tealGreen};
  display: flex;
  justify-content: center;
  position: relative;
  
  /* Ajuste de transición en img y h4 */
  img {
    height: 90%;
    z-index: 1;
    aspect-ratio: 1/1;
    transition: opacity 0.3s ease; /* Transición en opacity */
  }

  h4 {
    margin: auto;
    color: ${colorTheme.tealGreen};
    position: absolute;
    top: 40%;
    z-index: 1000;
    text-align: center;
    font-size: 28px;
    font-weight: 100;
    width: 80%;
    
    opacity: 0; 
    transition: opacity 0.3s ease; 
  }

  &:hover {
    img {
      opacity: 0.1; /* Cambia a 20% de opacidad en hover */
    }
    h4 {
      opacity: 1; /* Cambia a 100% de opacidad en hover */
    }
  }
`;