import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../Animation";

import logo from "../../img/pp.png";

import "./Header.css";

const Header = () => {
  return (
    <motion.div initial="hidden" animate="visible" className="title">
      <motion.div variants={stagger} className="left">
        <motion.h1 variants={fadeUp}>Hello!</motion.h1>
        <motion.h2 variants={fadeUp}>Call me Cynthia</motion.h2>
        <motion.h3 variants={fadeUp}>Actuarial Mathematics Student</motion.h3>
      </motion.div>
      <div className="right">
        <motion.img
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          src={logo}
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default Header;
