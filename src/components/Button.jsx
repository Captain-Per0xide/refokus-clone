import React from 'react'
import { FaArrowRight } from "react-icons/fa";
function Button({title="Get Started"}) {
  return (
    <div className='max-w-45 px-4 py-2 bg-zinc-100 text-black rounded-full flex justify-between items-center'>
        <span className='text-sm font-medium'>{title}</span>
        <FaArrowRight/>
    </div>
  )
}

export default Button