import { Box, Container, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { colorTheme } from "../styles/colors";

export const CategoryBoxGrid= styled(Flex)`
  min-height: 100vh;
  width: 100%;
  background-color: ${colorTheme.darkBlue};

`;

export const SideBar= styled(Box)`
    width: 20%;
    background-color: #74b3ce17;
    border-right: 1px solid #e5e5e559;
    box-shadow: 12px 4px 20px 0px #5089916e;
    margin: 20px;
    border-radius: 20px;



`;

export const ItemsContainer= styled(Flex)`
flex-wrap: wrap;
gap: 20px;
width: 80%;
padding: 20px;
`;
