import { useParams } from 'react-router-dom';
import { CategoryBoxGrid, ItemsContainer, SideBar } from './CategoryPageStyle';
import { useItemsbyCategory } from '../hooks';
import { ItemsCard } from '../components';

export const CategoryPage = () => {
  const { endPoint } = useParams();
  console.log("endPoint:", endPoint);
  const { items, loading, error } = useItemsbyCategory(endPoint);

  console.log("datos de items: ", items); // Verifica los datos en la consola

  if (loading) return <p>Cargando Categoría...</p>;
  if (error) return <p>Error al cargar categoría: {error.message}</p>;

  return (
    <CategoryBoxGrid>
      <SideBar />
      <ItemsContainer>
        {items.map((item) => (
          <ItemsCard endPoint={endPoint} key={item.id} item={item}/>
        ))}
      </ItemsContainer>
    </CategoryBoxGrid>
  );
};
