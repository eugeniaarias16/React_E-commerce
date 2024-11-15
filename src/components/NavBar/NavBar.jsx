
import { NavBarBox, StyledBottomFlex,MenuItemBox, StyledTopFlex, LogoSection, CartWidget, MenuItemButton } from '../index'
import { useCategories } from '../../hooks/useCategories';


// Menu y SubMenus


export const NavBar = () => {
    const { organizedCategories} = useCategories(); 
    return (
        <NavBarBox>
            <StyledTopFlex>
                <LogoSection/>
                <CartWidget/>
            </StyledTopFlex>
            <StyledBottomFlex>
                {organizedCategories.map((category, index) => (
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
