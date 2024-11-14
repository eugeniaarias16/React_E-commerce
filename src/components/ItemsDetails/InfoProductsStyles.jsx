import { Button, Flex, Grid} from "@chakra-ui/react";
import styled from "styled-components";
import { colorTheme } from '../../styles/colors';

export const MainInfoContainer = styled(Grid)`
  padding: 30px;
  background-color: ${colorTheme.platinum};
  border-radius: 12px;
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
  gap: 20px;
  box-shadow: 0px 4px 12px rgba(0, 67, 70, 0.15);
`;

export const Title = styled.h2`
  font-size: 28px;
  color: ${colorTheme.darkBlue};
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Price = styled.p`
  font-size: 28px;
  color: ${colorTheme.darkGreen};
  font-weight: bold;
  margin: 10px 0;
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${colorTheme.tealGreen};
  margin-bottom: 20px;
  line-height: 1.5;
`;

export const RatingSection = styled(Flex)`
  justify-content: center;
  gap: 6px;
  .star {
    font-size: 24px;
    padding: 3px;
    
  }
`;

export const TagSection = styled(Flex)`
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  span {
    background-color: ${colorTheme.lightBlue};
    color: ${colorTheme.darkGreen80};
    padding: 5px 12px;
    border-radius: 16px;
    font-size: 13px;
  }
`;



export const QuantityBtnSection = styled(Flex)`
  justify-content: center;
  align-items: center;
  gap: 15px;
  p {
    font-size: 14px;
    color: ${colorTheme.darkBlue};
    margin: 0;
  }
`;

export const QuantityButton = styled(Button)`
  background-color: ${colorTheme.tealGreen};
  color: ${colorTheme.platinum};
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 18px;
  &:hover {
    background-color: ${colorTheme.green};
  }
`;

export const StockSection = styled(Flex)`
  justify-content: center;
  font-size: 14px;
  color: ${colorTheme.darkGreen};
`;

export const ButtonBuy = styled(Button)`
  width: 100%;
  padding: 12px 0;
  font-size: 16px;
  font-weight: bold;
  border: none;
  color: ${colorTheme.platinum};
  background-color: ${colorTheme.darkGreen};
  border-radius: 25px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    background-color: ${colorTheme.tealGreen};
    box-shadow: 0px 4px 12px rgba(0, 67, 70, 0.3);
  }
`;
