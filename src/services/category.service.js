// services/category.service.js

const categoryMapping = {
  Woman: ["womens"],
  Men: ["mens"],
  Electronics: ["smartphones", "laptops", "tablets", "mobile-accessories"],
  Home: ["furniture", "home-decoration", "kitchen-accessories"],
  Beauty: ["beauty", "skin-care", "fragrances"],
  Vehicles: ["vehicle", "motorcycle"],
  Others: ["sunglasses", "groceries"],
};

export const recategorizeCategories = (categories) => {

  // Array donde guardamos la nueva categorizacion 
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
        const newSlug= subcatName.replace(
          /\s+/g,
          "-"
        ).toLowerCase();
        return {
          slug: newSlug,
          name: subcatName
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase()), 
          url: `https://dummyjson.com/products/category/${newSlug}`, // Reemplaza espacios con guiones en la URL
        };
      });

    if (subcategories.length) {
      organizedCategories.push({ category, subcategories });
    }
  }

  return organizedCategories;
};
