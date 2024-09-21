import React from 'react'

function TransactionList({transactions}) {
  return (
    <>
      <ul className='list-none container mx-auto w-[40%] '>
        {
            transactions.map((transaction) => (
                <li key={Math.random()} className={`${transaction.amount > 0 ? "bg-green-300" : "bg-red-300"} p-2 mt-5 rounded-lg`}>
                    {transaction.text}
                    <span className='float-right'>{transaction.amount}</span>
                </li>
            ) )
        }
      </ul>
    </>
  )
}

export default TransactionList;
