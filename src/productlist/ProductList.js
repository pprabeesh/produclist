import React, { useEffect, useContext } from "react";
import axios from "axios";
import Product from "../product/Product";
import { StyledContainer, Styledflex } from "./ProductList.styles";
import { DATAURL } from "../Constants";
import { FilterContext } from "../Context";

export const ProductList = () => {
  const { state, actions, dispatch } = useContext(FilterContext);
  useEffect(() => {
    axios.get(DATAURL).then(result => dispatch(actions.add(result.data)));
  }, [actions, dispatch]);
  const products = state ? state.productList : [];
  return (
    <React.Fragment>
      <StyledContainer>
        <Styledflex>
          {products &&
            products.map(product => (
              <Product key={product.index} {...product} />
            ))}
        </Styledflex>
      </StyledContainer>
    </React.Fragment>
  );
};

export default ProductList;
