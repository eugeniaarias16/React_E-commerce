
import { useCategories } from './useCategories';


export const useFilteredCategories = (categoryName) => {
  const { organizedCategories, loading, error } = useCategories();

  // Filtrar categorías específicas basado en categoryName
  const filteredCategories = organizedCategories.filter(category => 
    category.category === categoryName
  );

  return { filteredCategories, loading, error };
};