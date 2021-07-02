import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { BsTrashFill } from 'react-icons/bs';


const IncomeTransaction = ({ incomeTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="transaction">
      <span className="transaction-text">{incomeTransaction.incomeText}</span>
      <span className="transaction-amount">
        ${incomeTransaction.incomeAmount}
      </span>
      <button
        onClick={() => deleteTransaction(incomeTransaction.id)}
        className="delete-btn"
      >
        <i><BsTrashFill /></i>
      </button>
    </li>
  );
};

export default IncomeTransaction;