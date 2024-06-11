import React from 'react'
import technology from "../../../assets/technology.png"
import "./HomeAbout.css"

const HomeAbout = () => {
  return (
   <div className='min-h-screen relative pt-4'>
     <h1 className='text-2xl text-center'>ABOUT COMPANY</h1>
     <div className='w-full p-5 md:flex md:justify-between'>
      <div className=' py-3 md:w-1/3 bg-black'>
        < p className='text-justify p-2'>There Are Some Things Money Can’t Buy. For Everything Else, There’s Mastercard. The Fastest Email Experience Ever Made There Are Some Things Money Can’t Buy. For Everything Else, There’s Mastercard. The Fastest Email Experience Ever MadeThere Are Some Things Money Can’t Buy. For Everything Else, There’s Mastercard. The Fastest Email Experience Ever Made</p>
      </div>

      <div className='p-3 md:w-1/3'>
      <img className='rounded-2xl md:rounded-s-full size-80' src={technology} alt="" />
      </div>
    </div>
   </div>
  )
}

export default HomeAbout
