import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


const menu_items = ["Home","Blog","Subscription","About Us","Publication"]
export const MenuItem = ({ i }) => {
  
  return (
    <>
  
      <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" >
        {i}
        </div>
      <div className="text-placeholder" >
        {menu_items[i]}
      </div>
    </motion.li>
  
    
    </>
  );
};
