import { LinkBox,Box,Flex, Button} from "@chakra-ui/react";
import styled from "styled-components";
import { colorTheme } from "../../styles/colors";

export const CardBox = styled(LinkBox)`
  display: flex;
  width: 280px;
  height: 420px;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  background-color: ${colorTheme.platinum};
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(89, 97, 96, 0.534);
  }

  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-bottom: 1px solid ${colorTheme.tealGreen};
  }

  a{
    color: ${colorTheme.darkBlue};
    &:hover {
      color:${colorTheme.tealGreen};
      
    }
  }
`;

export const BoxInfo = styled(Flex)`
  flex-direction: column;
  align-items: center;
  padding: 10px;
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    text-align: center;
    color: ${colorTheme.darkGreen};
    margin: 5px 0;
  }
`;

export const Brand = styled(Box)`
  font-size: 0.9rem;
  color: ${colorTheme.tealGreen};
  font-weight: 400;
  text-align: center;
  margin-bottom: 8px;
`;

export const Price = styled(Box)`
  width: 90px;
  padding: 8px;
  margin: 10px 0;
  border-radius: 15px;
  background-color: ${colorTheme.darkGreen80};
  color: ${colorTheme.platinum};
  font-weight: bold;
  text-align: center;
`;



