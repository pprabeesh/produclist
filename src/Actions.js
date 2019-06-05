export const actions = {
  add: products => ({
    type: "add",
    productList: products
  }),
  update: filterBy => ({
    type: "update",
    data: filterBy
  }),
  filter: filterOption => ({
    type: "filter",
    selectedOption: filterOption
  })
};
