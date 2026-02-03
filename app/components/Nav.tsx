'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'



const navVariants: Variants = {
  hidden: {
    y: -20,
    opacity: 0
  },
  show:{
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

const Nav = () => {

  return (
    <motion.div
      variants={navVariants}
      initial = 'hidden'
      animate = 'show'
      className="w-full z-10 fixed flex items-center h-[64px] bg-white shadow-md">

      <div className='p-2.25 flex items-center gap-2'>
        <i className='bx bx-check-shield text-blue-600 text-[30px]'></i>
        <h3 className='text-xl font-bold text-blue-900'>BILL BOT</h3>
      </div> 
      
    </motion.div>
  )
}

export default Nav
