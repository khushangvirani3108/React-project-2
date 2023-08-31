import React from 'react'
import img from "../img.jpg";

function Details() {
  return (
    <div>
      <div>
    <div className='w-100 bg-dark text-light py-2 px-3 mx-0' style={{height:"70vh",}}>
      <h1 style={{textAlign:"center", marginBottom:"60px"}}>Home</h1>
      <img className='rounded-5 mx-auto d-block my-4' src={img} alt=''/>
      <h1 style={{textAlign:"center"}}>Khushang Virani</h1>
    </div>
    </div>
    </div>
  )
}

export default Details