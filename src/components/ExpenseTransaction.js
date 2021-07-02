import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { BsTrashFill } from 'react-icons/bs';

const ExpenseTransaction = ({ expenseTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="transaction">
      <span className="transaction-text">{expenseTransaction.expenseText}</span>
      <span className="transaction-amount">
        ${expenseTransaction.expenseAmount}
      </span>
      <button
        onClick={() => deleteTransaction(expenseTransaction.id)}
        className="delete-btn"
      >
        <i><BsTrashFill /></i>
      </button>
    </li>
  );
};

export default ExpenseTransaction;