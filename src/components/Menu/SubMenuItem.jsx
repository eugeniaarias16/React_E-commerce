import { MenuItem } from "@chakra-ui/react";


export const SubMenuItem = ({ subItemName, subItemLink }) => {
  return (
    <MenuItem asChild value={subItemName}>
      <a href={subItemLink} target="_blank" rel="noreferrer">
        {subItemName}
      </a>
    </MenuItem>
    )
};
