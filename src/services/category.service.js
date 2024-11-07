// services/category.service.js

const categoryMapping = {
  Woman: ["womens"],
  Men: ["mens"],
  Electronics: ["smartphones", "laptops", "tablets", "mobile-accessories"],
  Home: ["furniture", "home-decoration", "kitchen-accessories"],
  Beauty: ["beauty", "skin-care", "fragrances"],
  // Sports: ["sports-accessories", "motorcycle"],
  Vehicles: ["vehicle", "motorcycle"],
  Others: ["sunglasses", "groceries"],
};

export const recategorizeCategories = (categories) => {
  console.log("Verificando categorías en recategorizeCategories:", categories);

  const organizedCategories = [];

  for (const [category, keywords] of Object.entries(categoryMapping)) {
    const subcategories = categories
      .filter((cat) => {
        const catName = typeof cat === "string" ? cat : cat.name;
        return (
          typeof catName === "string" &&
          keywords.some((keyword) =>
            new RegExp(`\\b${keyword}\\b`, "i").test(catName)
          )
        );
      })
      .map((subcat) => {
        const subcatName = typeof subcat === "string" ? subcat : subcat.name;
        return {
          slug: subcatName,
          name: subcatName
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase()), 
          url: `https://dummyjson.com/products/category/${subcatName.replace(
            /\s+/g,
            "-"
          )}`, // Reemplazar espacios con guiones en la URL
        };
      });

    if (subcategories.length) {
      organizedCategories.push({ category, subcategories });
    }
  }

  return organizedCategories;
};
