import React from 'react'
import {
  Button,
  MenuRoot,
} from '@chakra-ui/react';

import { SubMenuItem } from "./SubMenuItem";
import { StyledButtonMenu, StyledMenuContent } from './MenuStyles'; 

export const MenuItemButton = ({ itemName, subItems }) => {
  return (
    <MenuRoot>
      <StyledButtonMenu  asChild>
        <Button variant="outline" size="sm">{itemName}</Button>
      </StyledButtonMenu>
      <StyledMenuContent >
        {subItems.map((subItem, index) =>
          <SubMenuItem
            key={index}
            subItemName={subItem.name}
            subItemLink={subItem.url}
          />
        )}
      </StyledMenuContent>
    </MenuRoot>
  )
}


