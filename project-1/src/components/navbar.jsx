import React from 'react'
import brand_logo from "/images/brand_logo.png"

const navbar = () => {
  return (
    <>
    <nav className='container flex justify-between items-center max-w-[1200px] h-[72px] mx-auto'>
        <div className='logo'>
            <img src={brand_logo} alt="logo" />
        </div>
        <ul className='flex gap-4'>
            <li href="">Menu</li>
            <li href="">Location</li>
            <li href="">About</li>
            <li href="">Contact</li>
        </ul>
        <button className='px-[16px] py-[6px] h-[32px] bg-red-600 text-white font-[500]'>Login</button>
    </nav>
    </>
  )
}

export default navbar
