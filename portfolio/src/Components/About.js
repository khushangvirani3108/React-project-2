import React from 'react'
import img from "../img.jpg";

function About() {
  return (
    <>
    <div className='row bg-dark text-light' style={{height:"60vh"}}>
      <h1 style={{textAlign:"center", marginBottom:"60px"}}>About Me</h1>
      <div className='col-6  bg-dark py-5 px-5'>
        <img  src={img} alt='' style={{minWidth:"300px",marginLeft:"300px"}}/>
      </div>
      <div className='col-6  text-light bg-dark py-5 px-5'>
        <h1>I am Khushang</h1>
        <p className='mt-3' style={{maxWidth:"500px", textAlign:"justify"}}>I am 14 years old and learning React Js. And i am also a Voleyball Player And going to play volleyball in district. I am in std 9th English Medium. Before i a have Experience of HTML, CSS , JAVASCRIPT and now REACT JS.</p>
      </div>
    </div>
    </>
  )
}

export default About