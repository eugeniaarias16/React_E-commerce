import React, { useEffect, useState } from 'react';
import { useApi } from './index';

export const useItemsbyCategory = (endPoint) => {
  const { data: itemsbyCategory, loading, error } = useApi(`/products/category/${endPoint}`);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Datos completos obtenidos de la API:", itemsbyCategory); // Verifica la estructura de itemsbyCategory
    console.log("Estado de carga:", loading);
    console.log("Error:", error);

    if (!loading && itemsbyCategory && itemsbyCategory.products) { // Asegúrate de que 'products' exista
      setItems(itemsbyCategory.products); // Asignar el array de productos
    } else {
      console.log("No se encontró la propiedad 'products' en la respuesta de la API.");
    }
  }, [itemsbyCategory, loading]);

  return { items, loading, error };
};
