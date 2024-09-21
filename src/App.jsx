import { useState } from "react";

import "./App.css";

import Header from "./components/header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/transactionList";

function App() {

  const [transactions, setTransaction] = useState([]);

  const addTransaction = (transaction) => {
    setTransaction([...transactions, transaction]);
  }

  const calculateBalance = () => {
    return transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
  }

  const calculateIncome = () => {
    return transactions.filter((transaction) => transaction.amount > 0).reduce((acc,transaction) => acc + transaction.amount, 0 )
  }

  const calculateExpense = () => {
    return transactions.filter((transaction) => transaction.amount < 0).reduce((acc,transaction) => acc + transaction.amount,0)
  }

  
  return (
    <>
    <Header/>
    <Balance balance={calculateBalance()}/>
    <IncomeExpenses income={calculateIncome()} expense={calculateExpense()}/>
    <AddTransaction addTransaction={addTransaction}/>
    < TransactionList transactions={transactions}/>
    </>
  );
}

export default App;
