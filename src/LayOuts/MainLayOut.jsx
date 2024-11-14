import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import { NavBar, Footer } from '../components';
import styled from 'styled-components';
import { MainRouter } from '../router';

const GridBox = styled(Grid)`
  grid-template-areas: 
    "header header" 
    "main main" 
    "footer footer";
  grid-template-columns  :1fr ;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  max-height: 100vw;
  width: 100%;
  margin: 0 auto;
  
`;

export const MainLayOut = () => {
  return (
    <GridBox>

      {/* Header */}
      <Box as="header" gridArea="header">
        <NavBar />
      </Box>

      {/* Main */}
      <Box as="main" gridArea="main" >
        <MainRouter/>
      </Box>

      {/* Footer */}
      <Box as="footer" gridArea="footer">
        <Footer/>
      </Box>
    </GridBox>
  );
};
