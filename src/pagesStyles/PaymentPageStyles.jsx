import { Flex } from '@chakra-ui/react'
import styled from 'styled-components';
import { colorTheme } from '../styles/colors';

export const PaymentContainer= styled(Flex)`
  box-sizing: border-box;
  min-height: 80vh;
  height: max-content;
  justify-content: space-around;
  gap: 50px;
  margin: 50px;
`;


export const ShippingInfoContainer= styled(Flex)`
box-sizing: border-box;
flex-wrap: wrap;
width: 50%;
min-height: 500px;
height:90%;
background-color: ${colorTheme.platinum};
border-radius:20px;
position: relative;
padding: 30px;
h2{
  width: 100%;
  color:${colorTheme.darkGreen80};
  text-align: center;
  font-size: 28px;;
  margin-bottom: 20px;
}
`;
export const CardInfoContainer= styled(Flex)`
box-sizing: border-box;
width: 50%;
min-height: 500px;
height:90%;
background-color:${colorTheme.platinum};
border-radius:20px;
`;
