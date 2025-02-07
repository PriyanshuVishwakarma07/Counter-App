import React, { useState } from 'react'

const App = () => {

  const [counter, setCounter] = useState(0)

  return (
    <div className='bg-zinc-50 h-screen w-screen flex flex-col justify-center items-center'>
      <h1 className='text-5xl font-bold pb-8'>COUNTER APP</h1>
      <div className='bg-gradient-to-l from-blue-200 to-blue-500 h-[50%]  rounded flex flex-col  justify-around items-center p-4'>
        ☺️
          <h1 className='text-center p-8 bg-zinc-50 text-3xl font-bold rounded-sm'> Counter : {counter }</h1>
          <div className='w-full h-[18%] flex justify-around items-center text-2xl text-center'>
            <button className='py-1 px-8 bg-blue-300 rounded ' onClick={() => setCounter(counter + 1 )}>+</button>
            <button className='py-1 px-8 bg-red-300 rounded' onClick={() => setCounter(counter - 1 )}>-</button>
          </div>
        </div>
     </div>

  )
}

export default App