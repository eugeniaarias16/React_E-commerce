import { MenuItem, MenuTrigger, MenuContent } from "@chakra-ui/react";
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

export const StyledSubMenuItem= styled(MenuItem)`

padding-top: 10px;
text-align: start;
line-height: 30px;
margin: auto;
width: 90%;
height:50px;
display: flex;
color: ${colorTheme.tealGreen};
text-decoration: none;
border-bottom: solid 1px ;
justify-content: start;

`;

export const StyledMenuContent= styled(MenuContent)`
background-color: ${colorTheme.darkGreen50};
text-align: center;
height: max-content;
margin-top: 10px;
padding: 20px 0;
`;