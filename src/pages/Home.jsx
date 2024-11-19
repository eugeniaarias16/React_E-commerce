import React from 'react'
import { Banner,  CategorySection } from '../components'


export const Home = () => {
  return (
    <div>
      <Banner/>
      <CategorySection categoryName="Woman"/>
      <CategorySection categoryName="Men"/>
      <CategorySection categoryName="Electronics"/>
      <CategorySection categoryName="Home"/>
      <CategorySection categoryName="Beauty"/>
      <CategorySection categoryName="Vehicles"/>
      <CategorySection categoryName="Others"/>
    </div>
  )
}



