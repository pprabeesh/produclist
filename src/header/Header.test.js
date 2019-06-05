import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { actions } from "../Actions";
import Header from "./Header";
import { FilterContext } from "../Context";

test("Header renders correctly", () => {
  const state = {};
  const dispatch = () => {};
  let container = document.createElement("div");

  renderer.act(() => {
    ReactDOM.render(
      <FilterContext.Provider value={{ state, actions, dispatch }}>
        <Header />
      </FilterContext.Provider>,
      container
    );
  });

  expect(container).toMatchSnapshot("Not expanded");
});
