import React, { useReducer } from "react";

import GlobalContext from "../_global/globalContext";
import globalReducer from "../_global/globalReducer";

import { ADD_TRANS } from "../types";

const GlobalState = (props) => {
 const initialState = {
  transactions: [],
 };

 const [state, dispatch] = useReducer(globalReducer, initialState);

 const addTransaction = (formData) => {
  dispatch({
   type: ADD_TRANS,
   payload: formData,
  });
 };

 return (
  <GlobalContext.Provider
   value={{
    transactions: state.transactions,
    addTransaction,
   }}
  >
   {props.children}
  </GlobalContext.Provider>
 );
};

export default GlobalState;
