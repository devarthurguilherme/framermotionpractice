import React from 'react'
import {motion} from "framer-motion";

const Heading = ({ children }) => {
  return (
    <motion.h1 className="text-5xl"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: 2, duration: 2}}
    >
      { children }
    </motion.h1>
  )
}

export default Heading