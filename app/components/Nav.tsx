'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'



const navVariants: Variants = {
  hidden: {
    y: -20,
    scale: 0.9,
    opacity: 0
  },
  show:{
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

const Nav = () => {

  return (
    <motion.div
      variants={navVariants}
      initial = 'hidden'
      animate = 'show'
      className="w-full h-[60px] bg-white shadow-md flex items-center justify-between p-[20px] sticky">

      <div className='p-[10px] flex items-center gap-1'>
        <i className='bx bx-check-shield text-blue-600 text-[30px]'></i>
        <h3 className='text-[#1c398e] text-xl font-bold'>BILL BOT</h3>
      </div>
      <div className="flex items-center gap-3">
        <ul className='gap-6 flex items-center font-medium text-base'>
            <li className='hover:text-blue-600 cursor-pointer'>How it works</li>
            <li className='hover:text-blue-600 cursor-pointer'>Pricing</li>
            <li className='hover:text-blue-600 cursor-pointer'>Trust & Transparency</li>
        </ul>
        <button type="button" className='text-white bg-blue-600 rounded-lg p-[5px] font-medium hover:bg-blue-700'>Upload Your Bill</button>
        </div> 
      
    </motion.div>
  )
}

export default Nav
