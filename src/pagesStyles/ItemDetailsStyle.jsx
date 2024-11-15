import { Grid,Box, LinkBox } from "@chakra-ui/react";
import styled from "styled-components";
import { colorTheme } from "../styles/colors";



export const ItemBox= styled(Grid)`
background-color: ${colorTheme.platinum};
max-width: 100vw;
min-height:100vh ;
grid-template-columns: 60% 40%;
grid-template-rows: 60% 40%;
grid-template-areas: 
'imagesBox detailsBox'
'imagesBox detailsBox'
;

`;


export const ImagesBox= styled(Box)`
grid-area: imagesBox;

`;

export const DetailBox= styled(Box)`
grid-area: detailsBox;
margin: auto;


`;

