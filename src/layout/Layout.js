import React, { Fragment } from "react";
import Header from "../header/Header";
import ProductList from "../productlist/ProductList";

const Layout = props => (
  <Fragment>
    <Header />
    <ProductList />
    {props.children}
  </Fragment>
);

export default Layout;
