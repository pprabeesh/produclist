import React from "react";
import { StyledContainer, StyledImage, StyledTags } from "./Product.styles";

const Product = product => {
  return (
    <StyledContainer>
      <StyledImage
        bground={
          process.env.PUBLIC_URL + "/assets/images/" + product.productImage
        }
      />
      <StyledTags />
      <StyledTags />
    </StyledContainer>
  );
};

export default Product;
