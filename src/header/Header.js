import React, { useContext } from "react";
import { StyledHeader, StyledTitle, StyledFilter } from "./Header.styles";
import { FilterContext } from "../Context";

const Header = () => {
  const { state, actions, dispatch } = useContext(FilterContext);
  return (
    <StyledHeader>
      <StyledTitle> Woman's tops </StyledTitle>
      <StyledFilter>
        <select onChange={e => dispatch(actions.update(e.target.value))}>
          <option value="">Select</option>
          <option value="size">Filter by size</option>
          <option value="price">Filter by price</option>
        </select>
        {state && state.filterBy && (
          <select onChange={e => dispatch(actions.filter(e.target.value))}>
            <option value="All">All</option>
            {state.filterOptions.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        )}
      </StyledFilter>
    </StyledHeader>
  );
};

export default Header;
