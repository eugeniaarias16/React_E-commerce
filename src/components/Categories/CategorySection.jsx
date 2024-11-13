// src/components/FilteredCategoryDisplay.jsx
import React from 'react';
import { CategoriesContainer, SectionCategdBox } from './CategoriesStyles'; 
import { useFilteredCategories } from '../../hooks/useFilterCategory';
import {CategoriesCard} from './CategoriesCard';


export const CategorySection = ({ categoryName }) => {
  const { filteredCategories, loading, error } = useFilteredCategories(categoryName);

  if (loading) return <p>Cargando categorías...</p>;
  if (error) return <p>Error al cargar categorías: {error.message}</p>;

  return (
    <SectionCategdBox>

    <CategoriesContainer>
      {filteredCategories.map((category, index) => (
        category.subcategories.map((subcategory, subIndex) => (
          <CategoriesCard 
            key={`${index}-${subIndex}`}
            name={subcategory.name}
            endPoint={subcategory.slug}
          />
        ))
      ))}
    </CategoriesContainer>


    </SectionCategdBox>
  );
};


