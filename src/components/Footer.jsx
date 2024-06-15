import React from 'react'

function Footer() {
  return (
    <div className='w-full '>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
            <div className='basis-1/2'>
                <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-4'>
                <div>
                    <h4 className='mb-10 text-zinc-500'>Socials</h4>
                    {["instagram","twitter(x?)","Linkedin"].map((item,index)=> <a key={index} className='block mt-2 capitalize'>{item}</a>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer