import React from 'react'
import '../App.css';

const Card=({item,amount})=>{
  return (
    <div className='container'>
      <h2>{item}</h2>
      <p>You have consumed {amount} calories</p>
      <div>
        <button className='delete'>Delete</button>
        <button className='edit'>Edit</button>
      </div>
    </div>
  )
}

export default Card