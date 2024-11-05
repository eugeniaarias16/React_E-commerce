
import { MenuItemButton } from '../Menu';
import { NavBarBox, StyledBottomFlex,MenuItemBox, StyledTopFlex } from './Styles'

// Menu y SubMenus
const menuItems = [
    {
        category: "Woman",
        subcategories: [
            {
                slug: "womens-bags",
                name: "Women's Bags",
                url: "https://dummyjson.com/products/category/womens-bags"
            },
            {
                slug: "womens-jewellery",
                name: "Women's Jewellery",
                url: "https://dummyjson.com/products/category/womens-jewellery"
            },
            {
                slug: "womens-clothes",
                name: "Women's Clothes",
                url: "https://dummyjson.com/products/category/womens-clothes"
            }
        ]
    },
    {
        category: "Men",
        subcategories: [
            {
                slug: "mens-shoes",
                name: "Men's Shoes",
                url: "https://dummyjson.com/products/category/mens-shoes"
            },
            {
                slug: "mens-watches",
                name: "Men's Watches",
                url: "https://dummyjson.com/products/category/mens-watches"
            },
            {
                slug: "mens-clothes",
                name: "Men's Clothes",
                url: "https://dummyjson.com/products/category/mens-clothes"
            }
        ]
    },
    {
        category: "Electronics",
        subcategories: [
            {
                slug: "smartphones",
                name: "Smartphones",
                url: "https://dummyjson.com/products/category/smartphones"
            },
            {
                slug: "laptops",
                name: "Laptops",
                url: "https://dummyjson.com/products/category/laptops"
            },
            {
                slug: "televisions",
                name: "Televisions",
                url: "https://dummyjson.com/products/category/televisions"
            }
        ]
    },
    {
        category: "Home",
        subcategories: [
            {
                slug: "furniture",
                name: "Furniture",
                url: "https://dummyjson.com/products/category/furniture"
            },
            {
                slug: "lighting",
                name: "Lighting",
                url: "https://dummyjson.com/products/category/lighting"
            },
            {
                slug: "kitchen",
                name: "Kitchen",
                url: "https://dummyjson.com/products/category/kitchen"
            }
        ]
    },
    {
        category: "Beauty",
        subcategories: [
            {
                slug: "skincare",
                name: "Skincare",
                url: "https://dummyjson.com/products/category/skincare"
            },
            {
                slug: "makeup",
                name: "Makeup",
                url: "https://dummyjson.com/products/category/makeup"
            },
            {
                slug: "fragrances",
                name: "Fragrances",
                url: "https://dummyjson.com/products/category/fragrances"
            }
        ]
    }
];


export const NavBar = () => {
    return (
        <NavBarBox>
            <StyledTopFlex>
            </StyledTopFlex>
            <StyledBottomFlex>
                {menuItems.map((category, index) => (
                    <MenuItemBox key={index}>
                        <MenuItemButton
                            itemName={category.category}
                            subItems={category.subcategories}
                        />
                    </MenuItemBox>
                    
                ))}
            </StyledBottomFlex>
        </NavBarBox>

    )
}
 