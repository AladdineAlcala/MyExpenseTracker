import { ADD_TRANS } from "../types";

export default (state, action) => {
 switch (action.type) {
  case ADD_TRANS:
   // console.log(action.payload); //return current data
   return {
    ...state,
    transactions: [action.payload, ...state.transactions],
   };
  default:
   return state;
 }
};
