import React, { useContext } from 'react';
import { CartContainer, CartSection, ShopInfoSection, BtnSection, BoxShopInfo, DeleteSection } from './CartPageStyle';
import { ShopCard } from '../components/Categories/ShopCard';
import { CartContext } from '../context/CartContext';
import { FaTrash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export const CartShopPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const navigate = useNavigate();

  const handleKeepShopping = () => {
    navigate('/');
  };

  const handleConfirmBuy = () => {
    navigate('/payment');
  };



  
  return (
    <CartContainer>
      <CartSection>
        {cart.map((item) => (
          <ShopCard key={item.id} item={item} />
        ))}
      </CartSection>

      <ShopInfoSection>
        <h2>Order Summary</h2>

        <BoxShopInfo>
          <p><span>Total Items:</span> <strong>{cart.length}</strong></p>
          <p><span>Total Cost:</span> <strong>${totalPrice.toFixed(2)}</strong></p>
          <p><span>Shipping:</span> <strong>$5.00</strong></p>
          <p><span>Discount:</span> <strong>$0.00</strong></p>
        </BoxShopInfo>

        <h4>Total to Pay: <strong>${(totalPrice + 5).toFixed(2)}</strong></h4>
        <DeleteSection>
          <button onClick={() => clearCart(cart)}><FaTrash /></button>
        </DeleteSection>
      </ShopInfoSection>

      <BtnSection>
        <button onClick={handleKeepShopping}>Keep Shopping</button>
        <button onClick={handleConfirmBuy}>Confirm Buy</button>
      </BtnSection>
    </CartContainer>
  );
};
