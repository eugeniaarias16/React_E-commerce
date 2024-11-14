import React from 'react'
import { Banner,  CategorySection } from '../components'


export const Home = () => {
  return (
    <div>
      <Banner/>
      <CategorySection categoryName="Woman"/>
      <CategorySection categoryName="Men"/>
      <CategorySection categoryName="Electronic"/>
      <CategorySection categoryName="Home"/>
      <CategorySection categoryName="Beuty"/>
      <CategorySection categoryName="Vehicles"/>
      <CategorySection categoryName="Others"/>
    </div>
  )
}



