import React from "react";
import {
  FiltersWrapper,
  FilterSection,
  ApplyButton,
  Input,
  Label,
  Select,
} from "./CategoriesStyles";

export const Filters = ({
  priceRange = [0, 1000],
  setPriceRange,
  tags = [],
  selectedTags,
  setSelectedTags,
  setSortOrder,
  onApplyFilters,
  priceLimits = [0, 1000], // Nuevo: Limites dinámicos
}) => {
  const handleTagChange = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handlePriceChange = (e, index) => {
    const newValue = Number(e.target.value);
    const newRange = [...priceRange];

    if (index === 0 && newValue >= priceLimits[0] && newValue <= newRange[1]) {
      // Validar que el mínimo no sea menor al límite inferior y menor al máximo actual
      newRange[index] = newValue;
    } else if (
      index === 1 &&
      newValue <= priceLimits[1] &&
      newValue >= newRange[0]
    ) {
      // Validar que el máximo no sea mayor al límite superior y mayor al mínimo actual
      newRange[index] = newValue;
    }

    console.log(`Updated price range: ${newRange}`);
    setPriceRange(newRange);
  };

  return (
    <FiltersWrapper>
      <h3>Filters</h3>

      {/* Tags */}
      <FilterSection>
        <Label>Tags</Label>
        {tags.length > 0 ? (
          tags.map((tag) => (
            <Label key={tag}>
              <Input
                type="checkbox"
                value={tag}
                checked={selectedTags.includes(tag)}
                onChange={() => handleTagChange(tag)}
              />
              {tag}
            </Label>
          ))
        ) : (
          <p>No tags available</p>
        )}
      </FilterSection>

      {/* Price Range */}
      <FilterSection>
        <Label>Price Range</Label>
        <div className="range-labels">
          <Input
            type="number"
            value={priceRange[0]}
            min={priceLimits[0]} // Dinámico: Mínimo absoluto
            max={priceRange[1]} // Dinámico: Máximo relativo
            onChange={(e) => handlePriceChange(e, 0)}
          />
          <span>to</span>
          <Input
            type="number"
            value={priceRange[1]}
            min={priceRange[0]} // Dinámico: Mínimo relativo
            max={priceLimits[1]} // Dinámico: Máximo absoluto
            onChange={(e) => handlePriceChange(e, 1)}
          />
        </div>
      </FilterSection>

      {/* Sort Order */}
      <FilterSection>
        <Label>Sort By</Label>
        <Select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="default">Default</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </Select>
      </FilterSection>

      {/* Apply Button */}
      <ApplyButton onClick={onApplyFilters}>Apply Filters</ApplyButton>
    </FiltersWrapper>
  );
};
