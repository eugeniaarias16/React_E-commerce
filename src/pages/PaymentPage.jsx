import React from 'react';
import { CardInfoContainer, PaymentContainer, ShippingInfoContainer, } from '../pagesStyles/PaymentPageStyles'; 
import { PayForm,ShippingForm } from '../components/PaymentSection';


export const PaymentPage = () => {
  return (
    <PaymentContainer>
      {/* Informacion del Cliente */}
      <ShippingInfoContainer>
        <h2>Shipping Information</h2>
        <ShippingForm />
      </ShippingInfoContainer>

      {/* Informacion de pago */}
      <CardInfoContainer>
        <PayForm />
      </CardInfoContainer>

    </PaymentContainer>
  )
}
