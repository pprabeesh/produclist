import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { actions } from "../Actions";
import ProductList from "./ProductList";
import { FilterContext } from "../Context";

test("ProductList renders correctly", () => {
  const state = {};
  const dispatch = () => {};
  let container = document.createElement("div");

  renderer.act(() => {
    ReactDOM.render(
      <FilterContext.Provider value={{ state, actions, dispatch }}>
        <ProductList />
      </FilterContext.Provider>,
      container
    );
  });

  expect(container).toMatchSnapshot("Not expanded");
});
