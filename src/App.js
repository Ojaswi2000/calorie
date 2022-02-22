import React, { useState } from 'react'
import './App.css';
import Card from './components/Card';

const App=() => {
  const [item,setItem]=useState(null);
  const [amount,setAmount]=useState(null);
  const [showdata,setShowdata]=useState(false);

  const handleClick=()=>{
    setShowdata(true);
  }
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
      
      <div className='add'>
        <button style={{left:"50%"}} onClick={handleClick} >Add Item</button>
      </div>
      {
      showdata? <Card item={item} amount={amount} setShowdata={setShowdata}/>: 
      <h1 style={{margin:"20px",textAlign:"center"}}>Start adding items</h1>
      }

      
      
    </div>
  )
}

export default App