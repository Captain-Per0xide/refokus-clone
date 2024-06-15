import React, { useState } from 'react';
import Product from './Product';
import { motion } from 'framer-motion';

function Products() {
  const products = [
    { title: "arqitel", description: "lorem ipsum dolor sit amet, consectetur adip occurence velit sed diam nonumy eirmod tempor invid id", live: true, case: false },
    { title: "TTR", description: "lorem ipsum dolor sit amet, consectetur adip occurence velit sed diam nonumy eirmod tempor invid id", live: true, case: false },
    { title: "YIR 2022", description: "lorem ipsum dolor sit amet, consectetur adip occurence velit sed diam nonumy eirmod tempor invid id", live: true, case: true },
    { title: "Yahoo", description: "lorem ipsum dolor sit amet, consectetur adip occurence velit sed diam nonumy eirmod tempor invid id", live: true, case: true },
  ];

  const [pos, setPos] = useState(0);  // Initialize pos to 0
  const mover = (val) => {
    setPos(val * 23);  // Update pos based on val and correct calculation
  }

  return (
    <div className='mt-32 relative'>
      {products.map((elem, index) => (
        <Product key={index} mover={mover} val={elem} count={index} />
      ))}
      <div className='absolute w-full h-full top-0 pointer-events-none'>
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: `${pos}rem` }}  // Convert pos to string with 'rem'
          transition={{ease:[0.83, 0, 0.17, 1],duration:.6}}
          className='window w-[32rem] h-[23rem] absolute left-[45%] top-[0%] -translate-x-[-50%] bg-white overflow-hidden'>
          <motion.div animate={{y:-pos+`rem`}}
          transition={{ease:[0.83, 0, 0.17, 1],duration:.5}} className='w-full h-full top-[0%] -translate-x-[-50%] bg-sky-200'></motion.div>
          <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.83, 0, 0.17, 1],duration:.5}} className='w-full h-full top-[0%] -translate-x-[-50%] bg-sky-300'></motion.div>
          <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.83, 0, 0.17, 1],duration:.5}} 
          className='w-full h-full top-[0%] -translate-x-[-50%] bg-sky-600'></motion.div>
          <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.83, 0, 0.17, 1],duration:.5}} className='w-full h-full top-[0%] -translate-x-[-50%] bg-sky-700'></motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Products;
