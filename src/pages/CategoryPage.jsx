import { useParams } from "react-router-dom";
import { CategoryBoxGrid, ItemsContainer, SideBar } from "../pagesStyles";
import { useItemsbyCategory } from "../hooks";
import { ItemsCard } from "../components";
import { Filters } from "../components/Categories/Filters";
import { useState, useEffect } from "react";

export const CategoryPage = () => {
  const { endPoint } = useParams();
  const { items, loading, error } = useItemsbyCategory(endPoint);

  // Estado para rangos de precios dinámicos y filtros
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [priceLimits, setPriceLimits] = useState([0, 1000]); // Límites iniciales de precio
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");

  // Calcular límites de precio dinámicamente cuando cambien los productos
  useEffect(() => {
    if (items.length > 0) {
      const prices = items.map((item) => item.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      setPriceLimits([minPrice, maxPrice]); // Establecer límites dinámicos
      setPriceRange([minPrice, maxPrice]); // Rango inicial basado en los límites
    }
  }, [items]);

  // Actualizar los elementos filtrados
  const handleApplyFilters = () => {
    let updatedItems = items;

    // Filtrar por tags
    if (selectedTags.length > 0) {
      updatedItems = updatedItems.filter((item) =>
        item.tags.some((tag) => selectedTags.includes(tag))
      );
    }

    // Filtrar por rango de precio
    updatedItems = updatedItems.filter(
      (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    // Ordenar por precio
    if (sortOrder === "asc") {
      updatedItems = updatedItems.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      updatedItems = updatedItems.sort((a, b) => b.price - a.price);
    }

    setFilteredItems(updatedItems);
  };

  if (loading) return <p>Cargando Categoría...</p>;
  if (error) return <p>Error al cargar categoría: {error.message}</p>;

  return (
    <CategoryBoxGrid>
      <SideBar>
        {/* Pasar priceLimits y otros estados necesarios */}
        <Filters
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          tags={[...new Set(items.flatMap((item) => item.tags || []))]} // Extraer tags únicos de los productos
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          setSortOrder={setSortOrder}
          onApplyFilters={handleApplyFilters}
          priceLimits={priceLimits} // Pasar los límites calculados
        />
      </SideBar>
      <ItemsContainer>
        {(filteredItems.length > 0 ? filteredItems : items).map((item) => (
          <ItemsCard endPoint={endPoint} key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CategoryBoxGrid>
  );
};
