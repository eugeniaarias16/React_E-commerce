
import { MenuItemButton } from '../Menu';
import { NavBarBox, StyledBottomFlex,MenuItemBox, StyledTopFlex } from './Styles'
import { useCategories } from '../../hooks/useCategories';
import { CartWidget } from '../cart/CartWidget';
import { LogoSection } from '../Logo/LogoSection'; 
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
