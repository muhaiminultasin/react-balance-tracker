import React from 'react'

function IncomeExpenses({income, expense}) {
  return (
    <>
      <div className='flex justify-around'>
          <div className=' text-green-300'>
            <h3>Total Income</h3>
            <p>$ {income}</p>
          </div>

          <div className='text-red-300'>
            <h3>total expense</h3>
            <p>$ {expense}</p>
          </div>
      </div>
    </>
  )
}

export default IncomeExpenses;
