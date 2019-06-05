import { SIZES } from "./Constants";

export const reducer = (state, action) => {
  switch (action.type) {
    case "add": // add products intially to state
      return {
        ...state,
        productList: action.productList,
        initialList: action.productList
      };
    case "update": // update state on how to filter
      let options = SIZES;
      if (action.data !== "size") {
        options = state.initialList.map(product => product.price).sort();
      }
      return { ...state, filterBy: action.data, filterOptions: options };
    case "filter": // update state for selectedoption
      let products = [];

      if (state.filterBy === "size") {
        products = state.initialList.filter(product =>
          product.size.includes(action.selectedOption)
        );
      } else {
        products = state.initialList.filter(
          product => product.price === action.selectedOption
        );
      }
      if (action.selectedOption === "All") {
        products = state.initialList;
      }
      return { ...state, productList: products };
    default:
      return;
  }
};
