import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { CartBtnSection, LinkCart } from './CartStyle';
import { FaArrowRight } from "react-icons/fa6";

export const CartWidget = () => {
  return (
    <CartBtnSection>
    <LinkCart to="/shopCart">
    <FaShoppingCart className="iconCart"/>
    <FaArrowRight className="iconArrow" />
  </LinkCart>
</CartBtnSection>
  )
}
