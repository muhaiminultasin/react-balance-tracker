import React from 'react'
import { useState } from 'react';

function AddTransaction({addTransaction}) {

    const [text,setText] = useState("");
    const [amount, setamount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(text === "" || amount === 0 ) return;
        addTransaction({text, amount: +amount});

        setText("");
        setamount("");
    }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col w-[40%] mx-auto '>
        <input type="text" value={text} className='p-2 mt-2 border border-indigo-500' onChange={(e) => setText(e.target.value)}  placeholder='Enter your description'/>

        <input type="number" value={amount} className='p-2 mt-2 border border-indigo-500' onChange={(e) => setamount(e.target.value)} placeholder='enter your amount' />

        <button type="submit" className='bg-indigo-500 p-2 w-fit text-white mt-5 mx-auto'>Add Transaction</button>
      </form>
    </>
  )
}

export default AddTransaction;
