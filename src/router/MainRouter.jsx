import { Routes, Route } from "react-router-dom";

import React from 'react'
import { Home, NotFound,CategoryPage, ItemDetails, } from "../pages";
import { CartShopPage } from "../pages/CartShopPage";
import { PaymentPage } from "../pages/PaymentPage";



export const MainRouter = () => {
  return (
      <Routes>
        <Route path="/"  element={<Home/>}/> // Nuestra ruta principal
        <Route path="/category/:endPoint" element={<CategoryPage />} />
        <Route path="/category/:Class/:idProduct"  element={<ItemDetails/>} />
        <Route path="/shopCart" element={<CartShopPage/>}/>
        <Route  path="/payment" element={<PaymentPage/>}/>
        <Route path="*"  element={<NotFound/>}/> // Cuando no se encuentra la ruta

      </Routes>
  
  )
}
