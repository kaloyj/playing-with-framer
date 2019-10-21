import React from "react";
import ReactDOM from "react-dom";
import Box from "./Box";
import "./index.scss";
import { motion } from "framer-motion";

const App = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="main">
      <Box
        animate={{ scale: 2 }}
        transition={{ duration: 0.5 }}
        label="animate"
      ></Box>

      <Box
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          loop: Infinity,
          repeatDelay: 1
        }}
        label="keyframe"
      ></Box>

      <motion.div
        className="flex-1 container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <Box className="item" label="stagger" variants={item}></Box>
        <Box className="item" label="stagger" variants={item}></Box>
        <Box className="item" label="stagger" variants={item}></Box>
        <Box className="item" label="stagger" variants={item}></Box>
      </motion.div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
