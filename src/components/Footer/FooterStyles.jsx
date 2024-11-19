
import React from 'react';
import styled from 'styled-components';
import { colorTheme } from '../../styles/colors';
import { Box, Container, Stack, Text, Link } from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

export const MyFooter = styled(Box)`
  background-color: ${colorTheme.darkGreen};
  width: 100%;
  color: ${colorTheme.platinum};
  padding: 40px 0;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FooterSection = styled(Stack)`
  flex: 1 1 200px;
  margin: 20px;
`;

export const ListHeader = styled(Text)`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: ${colorTheme.platinum};
`;

export const UnstyledLink = styled(Link)`
  color: ${colorTheme.platinum};
  text-decoration: none;
  margin-bottom: 8px;
  &:hover {
    text-decoration: underline;
    color: ${colorTheme.tealGreen};
  }
`;

export const SocialIcons = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 10px;

  a {
    color: ${colorTheme.platinum};
    margin-right: 15px;
    font-size: 1.5rem;
    &:hover {
      color: ${colorTheme.tealGreen};
    }
  }
`;