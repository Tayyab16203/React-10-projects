import React from 'react'
import amazon_png from '/images/amazon.png'
import flipkart_png from '/images/flipkart.png'
import hero_image_png from '/images/hero-image.png'
const HeroSection = () => {
  return (
    <main className="max-w-[1200px] mx-auto flex items-center justify-center h-[calc(100vh -72px)]">
      <div className="hero-content  flex flex-col gap-4">
        <h1 className='font-extrabold text-[80px] max-w-[700px] leading-[60px]'>YOUR FEET DESERVE THE BEST</h1>
        <p className='font-[600] text-gray-600 max-w-[400px]'>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn flex gap-4">
            <button className='px-[16px] py-[6px] text-[24px] bg-red-600 text-white font-[500]'>Shop Now</button>
            <button className='px-[16px] py-[6px] text-[24px] bg-transparent border border-gray-600 text-gray-600 font-[500]'>Category</button>
        </div>

        <div className="shopping">
          <p className='text-[14px] mb-[8px]'>Also Available On</p>
          <div className="brand-icons flex gap-4 items-center">
            <img src={amazon_png} alt="amazon-logo" />
            <img src={flipkart_png} alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image ">
        <img className='hero-image h-[400px] bg-cover' src={hero_image_png} alt="hero-image" />
      </div>
    </main>
  )
}

export default HeroSection
