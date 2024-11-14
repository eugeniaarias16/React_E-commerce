import { Link } from "react-router-dom";
import { StyledSubMenuItem } from "./MenuStyles";


export const SubMenuItem = ({ subItemName, subItemEndPoint}) => {
  return (
    <StyledSubMenuItem  asChild value={subItemName}>
      <Link  to={`/category/${subItemEndPoint}`}  target="_blank" rel="noreferrer">
        {subItemName}
      </Link >
    </StyledSubMenuItem>
  )}