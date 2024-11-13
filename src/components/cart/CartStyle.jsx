import { Button, Flex, Grid, LinkBox } from "@chakra-ui/react";
import styled from "styled-components";
import { colorTheme } from '../../styles/colors';
import { Link } from "react-router-dom";

export const CartBtnSection = styled(Flex)`
  height: 100%;
  width: 50%;
  padding: 0;
  justify-content: flex-end;
  align-items: center;
`;

export const LinkCart = styled(Link)`
  display: block;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  background-color: ${colorTheme.darkGreen80};

  &:hover {
    background-color: ${colorTheme.darkBlue};
  }
  .iconCart{
    width: 30px;
    height: 30px;
    color: ${colorTheme.platinum};
    
  }
  .iconArrow {
    width: 30px;
    height: 30px;
    color: ${colorTheme.darkGreen80};
    opacity: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  &:hover .iconArrow {
    opacity: 1;
    transform: translateX(5px);
  }
`;