import React, { useContext } from 'react';
import { MainInfoContainer, Title, Price, Description, QuantityButton,QuantityBtnSection, StockSection, ButtonBuy, RatingSection, TagSection,  } from './InfoProductsStyles';
import { FaStar } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';





export const InfoProducts = ({ item }) => {
  const { cart, addItemToCart, removeItemFromCart } = useContext(CartContext);
  
  // Encuentra el producto en el carrito para obtener la cantidad actual
  const cartItem = cart.find((cartItem) => cartItem.id === item.id);
  const quantity = cartItem ? cartItem.quantity : 0;  // Cantidad actual en el carrito o 0 si no está en el carrito

  return (
    <MainInfoContainer>
  


      <Title>{item.title}</Title>
      <Description>{item.description}</Description>
      <Price>${item.price}</Price>

      <RatingSection>
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar key={index} className="star" color={index < Math.round(item.rating) ? '#cfb312' : '#E5E5E5'} />
        ))}
      </RatingSection>

      <TagSection>
        {item.tags.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </TagSection>

      <QuantityBtnSection>
        <p>Quantity</p>
        <QuantityButton onClick={() => removeItemFromCart(item)}>-</QuantityButton>
        <p>{quantity}</p>
        <QuantityButton onClick={() => addItemToCart(item)}>+</QuantityButton>
      </QuantityBtnSection>

      <StockSection>
        <p>Available Stock: {item.stock}</p>
      </StockSection>

      <ButtonBuy onClick={() => addItemToCart(item)}>Add to Bag</ButtonBuy>
    </MainInfoContainer>
  );
};
