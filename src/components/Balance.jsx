import React, { useContext } from "react";
import GlobalContext from "../context/_global/globalContext";
import cleanDecimal from "../util/util";

function Balance() {
 const globalcontext = useContext(GlobalContext);
 const { transactions } = globalcontext;
 let bal = 0;
 if (transactions.length) {
  bal = 0;
  const _amount = transactions.map((transaction) => transaction.amount);
  const total = _amount
   .reduce((acc, item) => (acc += parseFloat(item)), 0)
   .toFixed(2);
  bal = cleanDecimal(total);
  //console.log(total);
 }

 return (
  <div className="balance">
   <h4>Your Balance:</h4>
   <span>{bal}</span>
  </div>
 );
}

export default Balance;
