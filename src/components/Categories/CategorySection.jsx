import React from 'react';
import { CategoriesContainer, SectionCategdBox } from './CategoriesStyles'; 
import { useFilteredCategories } from '../../hooks/useFilterCategory';
import { CategoriesCard } from '../index';

export const CategorySection = ({ categoryName }) => {
  const { filteredCategories, loading, error } = useFilteredCategories(categoryName);

  if (loading) return <p>Cargando categorías...</p>;
  if (error) return <p>Error al cargar categorías: {error.message}</p>;

  return (
    <SectionCategdBox>
      <h2>{categoryName} Section</h2>
      <CategoriesContainer>
        {filteredCategories.map((category, index) =>
          category.subcategories.map((subcategory, subIndex) => (
            <CategoriesCard 
              key={`${index}-${subIndex}`}
              name={subcategory.name}
              endPoint={subcategory.slug} // Pasa el slug de la subcategoría
            />
          ))
        )}
      </CategoriesContainer>
    </SectionCategdBox>
  );
};
