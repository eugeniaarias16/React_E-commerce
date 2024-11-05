import { Box } from "@chakra-ui/react";
import styled from "styled-components"
import { colorTheme } from "../../styles/colors";

const MyFooter=styled(Box)`
background-color: ${colorTheme.darkGreen};
height: 200px;
width: 100%;

`;

export const Footer= ()=> {
  return (
    <MyFooter>

    </MyFooter>
  )
}