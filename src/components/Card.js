import React from 'react'
import '../App.css';

const Card=({item,amount})=>{
 
  return (
    <div className='container'>
      <h2 style={{textAlign:"left",marginLeft:"15px"}}>{item}</h2>
      <p style={{textAlign:"left",margin:"15px"}}>You have consumed {amount} calories</p>
      <div className='cbtn'>
        <button className='delete'>Delete</button>
        <button className='edit'>Edit</button>
      </div>
    </div>
  )
}

export default Card