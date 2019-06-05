import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Product from "./Product";

test("Product renders correctly", () => {
  const product = {
    productImage: "test.jpg",
    isExclusive: true,
    isSale: true,
    productName: "test",
    price: "0.00"
  };
  let container = document.createElement("div");

  renderer.act(() => {
    ReactDOM.render(<Product product={product} />, container);
  });

  expect(container).toMatchSnapshot("Not expanded");
});
