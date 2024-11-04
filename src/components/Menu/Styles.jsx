import { MenuTrigger } from "@chakra-ui/react";
import styled from "styled-components"; 
import { colorTheme } from "../../styles/colors";

export const StyledButtonMenu= styled(MenuTrigger)`
  min-width: 100px;
width: 100%;
height: 50px;
border: none;
color: ${colorTheme.platinum};
background-color: ${colorTheme.darkGreen};
border-left: solid 1px;
font-size: 30px;
text-align: left;
box-shadow: none;
position: relative;
&:hover {
  background-color: ${colorTheme.tealGreen};
}
`;


