import React from 'react'
import {
  Button,
  MenuRoot,
} from '@chakra-ui/react';

import {  } from "./SubMenuItem";
import { StyledButtonMenu, StyledMenuContent, SubMenuItem } from '../index'; 

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
            subItemEndPoint={subItem.slug}
          />
        )}
      </StyledMenuContent>
    </MenuRoot>
  )
}


