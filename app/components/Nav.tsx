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
      className="w-full h-[50px] bg-white shadow-md">

      <div className='p-[9px] display-flex'>
        <i className='bx bx-check-shield text-blue-600 text-[30px]'></i>
        <h3 className='text-[#1c398e] text-[2re-900m]'>BILL BOT</h3>
      </div> 
      
    </motion.div>
  )
}

export default Nav
