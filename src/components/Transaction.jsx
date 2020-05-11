import React from "react";
import cleanDecimal from "../util/util";
//import GlobalContext from "../context/_global/globalContext";

function Transaction({ transaction }) {
 /* function currencyFormat(num) {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
 } */

 return (
  <li>
   {transaction.description}{" "}
   <span>
    {!transaction && transaction.amount ? 0 : cleanDecimal(transaction.amount)}
   </span>
  </li>
 );
}

export default Transaction;
