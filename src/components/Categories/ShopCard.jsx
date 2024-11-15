import React, { useContext } from 'react';
import { CardInfoBox, ShopCardItem, ImageBox, QuantityBtnSection, QuantityButton, StockSection } from '../../pagesStyles';
import { CartContext } from '../../context/CartContext';

export const ShopCard = ({ item }) => {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  return (
    <ShopCardItem>
      <ImageBox>
        <img src={item.thumbnail} alt={item.title} />
      </ImageBox>
      
      <CardInfoBox>
        <div className="title-price">
          <h4>{item.title}</h4>
          <p className="unit-price">Unit Price: ${item.price.toFixed(2)}</p>
        </div>
        
        <StockSection>
          {item.stock > 0 ? (
            <span className="in-stock">In Stock</span>
          ) : (
            <span className="out-of-stock">Out of Stock</span>
          )}
        </StockSection>

        <QuantityBtnSection>
          <QuantityButton onClick={() => removeItemFromCart(item)}>-</QuantityButton>
          <p>{item.quantity}</p>
          <QuantityButton onClick={() => addItemToCart(item)}>+</QuantityButton>
        </QuantityBtnSection>

        <p className="total-price">Total Price: ${(item.price * item.quantity).toFixed(2)}</p>
      </CardInfoBox>
    </ShopCardItem>
  );
};
