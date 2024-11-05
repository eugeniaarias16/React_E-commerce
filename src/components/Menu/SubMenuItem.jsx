import { MenuItem } from "@chakra-ui/react";
import { StyledSubMenuItem } from "./styles";


export const SubMenuItem = ({ subItemName, subItemLink }) => {
  return (
    <StyledSubMenuItem  asChild value={subItemName}>
      <a href={subItemLink} target="_blank" rel="noreferrer">
        {subItemName}
      </a>
    </StyledSubMenuItem>
  )}