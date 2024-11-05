import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/> // Nuestra ruta principal
        <Route path="*"  element={<NotFound/>}/> // Cuando no se encuentra la ruta
      </Routes>
    </BrowserRouter> 
  )
}
