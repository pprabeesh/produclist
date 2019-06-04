import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../product/Product";
import { StyledContainer, Styledflex } from "./ProductList.styles";
import { DATAURL } from "../Constants";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(DATAURL).then(result => setProducts(result.data));
  }, []);
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
