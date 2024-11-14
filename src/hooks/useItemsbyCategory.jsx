import React, { useEffect, useState } from 'react';
import { useApi } from './index';

export const useItemsbyCategory = (endPoint) => {
  const { data: itemsbyCategory, loading, error } = useApi(`/products/category/${endPoint}`);
  const [items, setItems] = useState([]);
  const [coverImage, setCoverImage] = useState(null);

  useEffect(() => {
    if (!loading && itemsbyCategory && itemsbyCategory.products) {
      setItems(itemsbyCategory.products);

      // Verifica que el primer producto y su primera imagen existan
      if (itemsbyCategory.products.length > 0 && itemsbyCategory.products[0].images) {
        setCoverImage(itemsbyCategory.products[0].images[0]);
      } else {
        console.log("No se encontró una imagen válida en el primer producto.");
      }
    }
  }, [itemsbyCategory, loading]);

  return { items, loading, error, coverImage };
};
