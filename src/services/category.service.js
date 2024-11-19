// services/category.service.js

const categoryMapping = {
  Woman: ["womens","tops"],
  Men: ["mens"],
  Electronics: ["smartphones", "laptops", "tablets", "mobile-accessories"],
  Home: ["furniture", "home-decoration", "kitchen-accessories"],
  Beauty: ["beauty", "skin-care", "fragrances"],
  Vehicles: ["vehicle", "motorcycle"],
  Others: ["sunglasses", "groceries", "sports-accessories" ],
};

export const recategorizeCategories = (categories) => {
  const organizedCategories = [];

  for (const [category, keywords] of Object.entries(categoryMapping)) {
    const subcategories = categories
    .filter((cat) => {
      const catSlug = typeof cat === "string" ? cat : cat.slug.toLowerCase();
      const matched = keywords.some((keyword) => {
        return (
          catSlug === keyword.toLowerCase() ||
          catSlug.startsWith(`${keyword.toLowerCase()}-`)
        );
      });
      if (matched) {
        console.log(`Categoría asignada: ${catSlug} a ${category}`);
      }
      return matched;
    })
      .map((subcat) => {
        const subcatName = typeof subcat === "string" ? subcat : subcat.name;
        const newSlug = typeof subcat === "string" ? subcat : subcat.slug;
        return {
          slug: newSlug,
          name: subcatName
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase()),
          url: `https://dummyjson.com/products/category/${newSlug}`,
        };
      });

    if (subcategories.length) {
      organizedCategories.push({ category, subcategories });
    }
  }

  return organizedCategories;
};
