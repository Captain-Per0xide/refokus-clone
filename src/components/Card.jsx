import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function Card({ width, start, para, hover = false }) {
  return (
    <motion.div 
      whileHover={hover ? { backgroundColor: "#7443ff", padding: "24px" } : {}}
      className={`p-5 rounded-xl bg-zinc-800 ${width} flex flex-col justify-between min-h-[30rem]`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One heading</h3>
          <FaLongArrowAltRight />
        </div>
        <h1 className="text-3xl font-medium mt-10">Whatever Heading</h1>
      </div>
      <div className="down w-full mt-60">
        {start && (
          <h1 className="text-6xl font-semibold tracking-tight leading-none">
            Start a Project
          </h1>
        )}
        <button className="rounded-full py-2 px-5 border-[1px] border-zinc-50">
          Contact Us
        </button>
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
            architecto consequatur sint, ullam et culpa!
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
