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
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.5
    }
  }
}
const navListVariants: Variants = {
  hidden: {
    x: -10,
    opacity: 0,
    scale: 0.9
  },
  show:{
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
}
const navLogoVariants: Variants = {
  hidden: {
    y: -10,
    opacity: 0,
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
      className="w-full h-16 bg-white shadow-md flex items-center justify-between p-[20px] fixed">

      <motion.div variants={navLogoVariants} className='p-2.5 flex items-center gap-1'>
        <i className='bx bx-check-shield text-blue-600 text-[30px]'></i>
        <h3 className='text-[#1c398e] text-xl font-bold'>BILL BOT</h3>
      </motion.div>
      <div className="flex items-center gap-3">
        <ul className='gap-6 flex items-center font-medium text-base'>
            <motion.li variants={navListVariants} className='hover:text-blue-600 cursor-pointer'>How it works</motion.li>
            <motion.li variants={navListVariants} className='hover:text-blue-600 cursor-pointer'>Pricing</motion.li>
            <motion.li variants={navListVariants} className='hover:text-blue-600 cursor-pointer'>Trust & Transparency</motion.li>
        </ul>
        <motion.button variants={navLogoVariants} type="button" className='text-white bg-blue-600 rounded-lg p-[5px] font-medium hover:bg-blue-700'>Upload Your Bill</motion.button>
        </div> 
      
    </motion.div>
  )
}

export default Nav
