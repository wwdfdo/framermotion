import React from "react";
import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute top-0 left-0  h-[100%] w-[100%] bg-[#000000e1] flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
