import React, { useReducer } from "react";
import Layout from "./layout/Layout";
import "./App.css";
import { actions } from "./Actions";
import { FilterContext } from "./Context";
import { reducer } from "./Reducer";

function App() {
  const initialState = {
    filterBy: "",
    filterOptions: [],
    productList: [],
    initialList: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FilterContext.Provider value={{ state, actions, dispatch }}>
      <div className="App">
        <Layout />
      </div>
    </FilterContext.Provider>
  );
}

export default App;
