import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import { colorTheme } from "../../styles/colors";

export const LogoSectionBox = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center; 
  justify-content: flex-start; 

  a {
    text-decoration: none;
    color: ${colorTheme.platinum};
  }

  img {
    max-width: 550px; // Ajusta el tamaño máximo del logo, cámbialo según necesites
    height: auto; // Mantiene la proporción de la imagen
  }
`;
