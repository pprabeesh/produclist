import React from "react";
import { StyledHeader, StyledTitle, StyledFilter } from "./Header.styles";
const Header = () => (
  <StyledHeader>
    <StyledTitle> Woman's tops </StyledTitle>
    <StyledFilter>
      <select>
        <option>Filter by size</option>
        <option>Filter by price</option>
      </select>
    </StyledFilter>
  </StyledHeader>
);

export default Header;
