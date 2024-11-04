import React from 'react'
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
} from '@chakra-ui/react';

import { SubMenuItem } from "./SubMenuItem";
import { StyledButtonMenu } from './Styles';

export const MenuItemButton = ({ itemName, subItems }) => {
  return (
    <MenuRoot>
      <StyledButtonMenu  asChild>
        <Button variant="outline" size="sm">{itemName}</Button>
      </StyledButtonMenu>
      <MenuContent>
        {subItems.map((subItem, index) => (
          <SubMenuItem
            key={index}
            subItemName={subItem.name}
            subItemLink={subItem.url}
          />
        ))}
      </MenuContent>
    </MenuRoot>
  )
}


