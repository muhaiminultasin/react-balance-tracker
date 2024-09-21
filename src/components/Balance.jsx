import React from 'react'

function Balance({balance}) {
  return (
    <>
        <div className='text-center'>
          <p>your balance</p>
          <h3 className='font-bold text-2xl'>$ {balance}</h3>
        </div>
    </>
  )
}

export default Balance;
