import { Box, Container, Flex} from "@chakra-ui/react";
import styled from "styled-components";
import {colorTheme} from '../../styles/colors';


export const NavBarBox=styled(Container)`

  background-color: ${colorTheme.darkGreen};
  height: 250px;
  width: 100%;
  
`;

export const StyledTopFlex = styled(Flex)`
  background-color:none;
  border-bottom: solid 2px ${colorTheme.darkBlue};
  height: 60%;
  margin: 0 10px;
  align-items: center;


  `;
export const StyledBottomFlex = styled(Flex)`
width: 90%;
justify-content: space-between;
margin: auto;
bottom: 10px;
padding-top: 20px;

`;  

export const MenuItemBox= styled(Box)`
  width: 20%;
  


`;