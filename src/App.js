import React, { useState } from 'react'
import './App.css';

const App=() => {
  const [item,setItem]=useState(null);
  const [amount,setAmount]=useState(null);
  return (
    <div className='App'>
      <div className='inputs'>
      <input type="text" placeholder='Item name' value={item} 
      onChange={(e)=>{
        setItem(e.target.value);
      }}
      />

      <input type="text" placeholder='Item name' value={amount} 
      onChange={(e)=>{
        setAmount(e.target.value);
      }}
      />

      </div>
      
      <div>
      <button >Add Item</button>
      </div>
      
      
      
    </div>
  )
}

export default App