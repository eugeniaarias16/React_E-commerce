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
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  width: 100%;
`;

export const MainLayOut = () => {
  return (
    <GridBox>

      {/* Header */}
      <Box as="header" gridArea="header">
        <NavBar />
      </Box>

      {/* Main */}
      <Box as="main" gridArea="main" minHeight={'1000px'}>
        <MainRouter/>
      </Box>

      {/* Footer */}
      <Box as="footer" gridArea="footer">
        <Footer/>
      </Box>
    </GridBox>
  );
};
