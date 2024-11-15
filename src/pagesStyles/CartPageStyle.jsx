import styled from "styled-components";
import { colorTheme } from "../styles/colors";

export const CartContainer = styled.div`
  min-height: 100vh;
  background-color: ${colorTheme.platinum};
  padding: 20px;
  display: grid;
  grid-template-areas:
    'Cart  ShopInfo'
    'Btn   Btn';
  grid-template-columns: 70% 30%;
  grid-template-rows: auto auto;
  gap: 20px;
`;

export const CartSection = styled.div`
  grid-area: Cart;
  height: 85vh;
  overflow-y: auto;
  scrollbar-color: rgba(80, 138, 145, 0.384)   ${colorTheme.platinum};
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${colorTheme.platinum};
  border-radius: 10px;
  overflow-y: auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;




//Informacion de la compra
export const ShopInfoSection = styled.div`
  grid-area: ShopInfo;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);  // fondo estilo glass
  backdrop-filter: blur(12px);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);  // sombra para efecto relieve
  border-radius: 15px;
  color: ${colorTheme.darkBlue};

  h2 {
    margin-bottom: 20px;
    color: ${colorTheme.tealGreen};
    font-size: 22px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px;
    text-align: center;
    background-color: rgba(80, 137, 145, 0.1); 
    border-radius: 15px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15); // sombra para separar del fondo
  }

  h4 {
    font-size: 20px;
    color: ${colorTheme.darkGreen};
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
    padding-top: 10px;
    border-top: 1px solid ${colorTheme.tealGreen}; 
  }
`;

export const BoxShopInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;  
  margin-bottom: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.15); 
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1); 

  p {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    color: ${colorTheme.darkBlue};

    span {
      font-weight: 500;
      color: ${colorTheme.tealGreen};
    }
    
    strong {
      color: ${colorTheme.green};
      font-weight: bold;
      margin-left: 20px;
    }
  }
`;

export const DeleteSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    width: 40px;
    height: 40px;
    border: solid 2px ${colorTheme.tealGreen}; // borde e ícono del mismo color
    color: ${colorTheme.tealGreen}; // color del ícono
    background-color: transparent;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.15);  // efecto de agrandamiento en hover
    }
  }
`;

//Botones 

export const BtnSection = styled.div`
  grid-area: Btn;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: ${colorTheme.platinum};
  border-radius: 10px;

  button {
    padding: 10px 20px;
    font-size: 20px;
    background-color: ${colorTheme.darkBlue};
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 200px;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${colorTheme.tealGreen};
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;




//ShopCard Styles
export const ShopCardItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  background-color: ${colorTheme.platinum};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  margin-bottom: 15px;

  &:hover {
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }
`;

export const ImageBox = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 15px;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardInfoBox = styled.div`
  flex-direction: column;
  width: 100%;

  .title-price {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      margin: 0;
      color: ${colorTheme.darkBlue};
      font-size: 18px;
    }

    .unit-price {
      background-color: ${colorTheme.lightBlue};
      padding: 4px 8px;
      border-radius: 5px;
      color: white;
      font-size: 14px;
    }
  }

  .total-price {
    text-align: right;
    font-weight: bold;
    margin-top: 10px;
    color: ${colorTheme.green};
  }
`;

export const QuantityBtnSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  p {
    margin: 0 10px;
    font-weight: bold;
    color: ${colorTheme.tealGreen};
    background-color: ${colorTheme.platinum};
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const QuantityButton = styled.button`
  padding: 5px 10px;
  color: ${colorTheme.darkBlue};
  background-color: ${colorTheme.lightBlue};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colorTheme.tealGreen};
  }
`;

export const StockSection = styled.div`
  margin-top: 5px;
  font-size: 14px;

  .in-stock {
    color: ${colorTheme.green};
    font-weight: bold;
  }

  .out-of-stock {
    color: #FF6347;
    font-weight: bold;
  }
`;