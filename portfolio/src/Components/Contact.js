import React from 'react'

function Contact() {
  return (
    <>
    <div className='row bg-dark text-light' style={{height:"60vh"}}>
      <h1 style={{textAlign:"center", marginBottom:"60px"}}>Contact Me</h1>
      <div className='col-6  bg-dark py-5 px-5'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929.8069331300759!2d72.89611466962971!3d21.222816198930555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f6239850d79%3A0x5f60018d8b20f01f!2sValam%20Nagar%2C%20Nana%20Varachha%2C%20Surat%2C%20Gujarat%20395006!5e0!3m2!1sen!2sin!4v1693482532456!5m2!1sen!2sin" style={{minWidth:"600px" ,minHeight:"450px", style:"border:0;" ,}}></iframe>
      </div>
      <div className='col-6  text-light bg-dark py-5 px-5' style={{marginTop:"50px"}}>
        <h2>Mobile No :</h2>
        <h3><a target="_blank">+91 9564856489</a></h3>
        <br/>
        <h2>Location :</h2>
        <p>A-1001 Valam Nagar Society simada Gam, Surat</p>
        <h2>Pin code :</h2>
        <p>395006 = SURAT</p>
      </div>
    </div>
    </>
  )
}

export default Contact