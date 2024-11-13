import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import { colorTheme } from "../../styles/colors";


export const LogoSectionBox = styled(Box)`
height: 100%;
width: 80%;


  h2{
    font-size: 80px;
    height: 100%;
    font-family: "Oswald", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    box-shadow: 2px ${colorTheme.darkBlue};
  }

  
  
`;

