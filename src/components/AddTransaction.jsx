import React, { useState, useContext } from "react";
import GlobalContext from "../context/_global/globalContext";

function AddTransaction() {
 const globalcontext = useContext(GlobalContext);

 const { addTransaction } = globalcontext;
 const [trans, setTrans] = useState({
  description: "",
  amount: 0,
 });

 const { description, amount } = trans;

 const resetForm = () => {
  setTrans({
   description: "",
   amount: 0,
  });
 };
 const onChange = (e) =>
  setTrans({ ...trans, [e.target.name]: e.target.value });

 const onSubmit = (e) => {
  e.preventDefault();

  const newTrans = {
   id: Math.floor(Math.random() * 10000000000),
   description: description,
   amount: amount,
  };
  addTransaction(newTrans);
  resetForm();
 };

 return (
  <>
   <h3>Add New Transaction</h3>
   <form onSubmit={onSubmit}>
    <div className="form-control">
     <label htmlFor="description">Description</label>
     <input
      type="text"
      name="description"
      value={description}
      onChange={onChange}
     ></input>
    </div>
    <div className="form-control">
     <label htmlFor="amount">Amount</label>
     <input
      type="number"
      name="amount"
      value={amount}
      onChange={onChange}
     ></input>
    </div>
    <button className="btn">Add Transaction</button>
   </form>
  </>
 );
}

export default AddTransaction;
