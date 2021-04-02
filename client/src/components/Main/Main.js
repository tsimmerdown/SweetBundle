import React from "react";
import { motion } from "framer-motion";

import Lander from "./Lander/Lander";
import Info from "./Info/Info";
import Testimonials from "./Testimonials/Testimonials";
import Instagram from "./Instagram/Instagram";

import Panels from "../Panels/Panels";
import Carousel from "./Carousel/Carousel";

const containerVariants = {
  initial: {
    visibility: "hidden",
    opacity: 0,
    transition: {
      delay: 1,
    },
  },
  animate: {
    visibility: "visible",
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
  exit: {
    visibility: "visible",
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const Main = () => {
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Lander />
        <Carousel />
        <Info />
        <Testimonials />
        <Instagram />
      </motion.div>
      <Panels />
    </>
  );
};

export default Main;
