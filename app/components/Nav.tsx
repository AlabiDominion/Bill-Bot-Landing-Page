'use client'
import React, { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import Link from "next/link"


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
const MotionLink = motion(Link);
const Nav = () => {
const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      variants={navVariants}
      initial = 'hidden'
      animate = 'show'
      className="w-full h-16 bg-white shadow-md flex items-center justify-between p-[20] fixed z-1000">

      <motion.div variants={navLogoVariants} className='p-2.5 flex items-center gap-1'>
        <Link href="/" className="items-center flex ">
        <i className='bx bx-check-shield text-blue-600 text-[30px]'></i>
        <h3 className='text-blue-600 text-xl font-bold'>BILL BOT</h3>
        </Link>
      </motion.div>
      <div className="flex items-center gap-3 md:flex ">
        <motion.div 
        className='gap-6 flex items-center font-medium text-base hidden md:flex' >
          <MotionLink href="/howItWorks"  variants={navListVariants} className='hover:text-blue-600 cursor-pointer'>
          How it works
          </MotionLink>
            <MotionLink href="./pricing" variants={navListVariants} className='hover:text-blue-600 cursor-pointer'>
              Pricing
              </MotionLink>
            <MotionLink href="/" variants={navListVariants} className='hover:text-blue-600 cursor-pointer'>Trust & Transparency</MotionLink>
        </motion.div>
        <Link href="/uploadYourBill">
        <motion.button variants={navLogoVariants} type="button" className='text-white bg-blue-600 rounded-lg p-[5] font-medium hover:bg-blue-700 hidden md:flex active:scale-[0.95]'>Upload Your Bill</motion.button></Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className=' focus:outline-none md:hidden'>   
            <i className={isOpen ? 'bx bx-x text-[30px]' : 'bx bx-menu text-[30px]'}></i>
        </button> 

        {isOpen && (
          <motion.div className='fixed space-y-4 px-4 py-4 shadow-md top-16 w-full z-50 left-0 md:hidden p-[4] bg-white '>
             <Link href="/howItWorks" className="hover:text-blue-600 cursor-pointer block">How it works</Link>
             <Link href="/pricing" className="hover:text-blue-600 cursor-pointer block">Pricing</Link>
              <a href="" className="block hover:text-blue-600">Trust & Transparency</a>
              <Link href="/uploadYourBill">
          <button type="button" className='text-white bg-blue-600 rounded-lg p-[5] font-medium hover:bg-blue-700 active:scale-[0.95] w-full'>Upload Your Bill</button></Link>
          </motion.div>
        )}
         
      
    </motion.div>
  )
}

export default Nav
