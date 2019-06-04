import React from "react";
import {
  StyledContainer,
  StyledImage,
  StyledTags,
  StyledTag,
  StyledProductName,
  StyledPrice
} from "./Product.styles";

const Product = product => {
  return (
    <StyledContainer>
      <StyledImage
        bground={
          process.env.PUBLIC_URL + "/assets/images/" + product.productImage
        }
      />
      <StyledTags>
        {product.isExclusive && (
          <StyledTag bground="green"> Exclusive </StyledTag>
        )}
        {product.isSale && <StyledTag bground="red"> Sale </StyledTag>}
      </StyledTags>
      <StyledTags>
        <StyledProductName>{product.productName}</StyledProductName>
        <StyledPrice>{product.price}</StyledPrice>
      </StyledTags>
    </StyledContainer>
  );
};

export default Product;
