import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <div className='w-full md:flex bg-[#34193b]'>
        {/* left section */}
      <div className='h-80 flex flex-col items-center justify-between md:w-1/3'>
        <h1 className='mt-3 text-4xl p-3 w-full text-center md:w-44'>ZOne</h1>

        <div>
          <ul className='flex gap-3'>
            <li><i className="fab fa-facebook-square"></i></li>
            <li><i class="fab fa-instagram"></i></li>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-youtube"></i>
          </ul>
        </div>
     
      </div>
      {/* right section */}

      <div className='flex flex-col gap-3 p-3 md:w-2/3 md:flex-row md:justify-evenly '>
        <div className='flex flex-col'>
          <h1 className='text-2xl'>Quick Links</h1>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>

        <div className='flex flex-col'>
          <h1 className='text-2xl'>Technologies</h1>
          <a href="">Html</a>
          <a href="">Css</a>
          <a href="">Javascript</a>
          <a href="">Reactjs</a>
        </div>

        <div className='flex flex-col'>
          <h1 className='text-2xl'>Get In Touch</h1>
          <a href="">Ponnani</a>
          <a href="">Malappuram</a>
          <a href="">Kerala</a>
        </div>

      </div>
      <hr />
     
    </div>
    <div className='flex justify-between md:justify-evenly'>
      <h1>Copyright © 2024 Zone</h1>
      <h1>Powered by Zone</h1>

      </div>
    </>
  )
}

export default Footer
