
//useById.jsx

import React, { useEffect, useState } from 'react'
import { useApi } from './useApi'

export const useById = (id) => {
  
  const {data: product,loading,error}=useApi(`/products/${id}`);
  const [dataProduct, setDataProduct]=useState([]);
  
  useEffect(()=>{
    if(product.length>0){
      setDataProduct(product);
      console.log('Mi Product es: ',dataProduct);
    }
  },[product]);
  
  
  return { product,loading,error};
}
