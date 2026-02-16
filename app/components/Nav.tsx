'use client'
import React, { useState } from 'react'
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
const [isOpen, setIsOpen] = useState(false)

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
      <div className="flex items-center gap-3 md:flex ">
        <motion.div 
        className='gap-6 flex items-center font-medium text-base hidden md:flex'>
            <motion.a variants={navListVariants} className='hover:text-blue-600 cursor-pointer'>How it works</motion.a>
            <motion.a variants={navListVariants} className='hover:text-blue-600 cursor-pointer'>Pricing</motion.a>
            <motion.a variants={navListVariants} className='hover:text-blue-600 cursor-pointer'>Trust & Transparency</motion.a>
        </motion.div>
        <motion.button variants={navLogoVariants} type="button" className='text-white bg-blue-600 rounded-lg p-[5px] font-medium hover:bg-blue-700 hidden md:flex active:scale-[0.95]'>Upload Your Bill</motion.button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className=' focus:outline-none md:hidden'>   
            <i className={isOpen ? 'bx bx-x text-[30px]' : 'bx bx-menu text-[30px]'}></i>
        </button> 

        {isOpen && (
          <motion.div className='absolute shadow-md top-16 w-full z-50 left-0 md:hidden p-[4px] bg-white '>
            <a href="" className="block hover:text-blue-600">How it works</a>
            <a href="" className="block hover:text-blue-600">Pricing</a>
            <a href="" className="block hover:text-blue-600">Trust & Transparency</a>
          <button type="button" className='text-white bg-blue-600 rounded-lg p-[5px] font-medium hover:bg-blue-700 active:scale-[0.95] w-full'>Upload Your Bill</button>
          </motion.div>
        )}
         
      
    </motion.div>
  )
}

export default Nav
