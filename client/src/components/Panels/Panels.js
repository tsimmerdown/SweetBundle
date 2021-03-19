import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const transitions = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

const Panel = styled(motion.div)`
  height: 100vh;
  width: 50vw;
  position: absolute;
  z-index: 150000;
  background: #696969;

  &.leftPanel {
    left: 0;
  }

  &.rightPanel {
    right: 0;
  }
`;

const Panels = () => {
  return (
    <>
      <Panel
        initial={{ height: 0, top: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          top: [null, 0, 0],
        }}
        transition={{ ...transitions, duration: 2, times: [0, 0.5, 1] }}
        // exit={{
        //   height: [0, window.innerHeight, 0],
        //   top: [window.innerHeight, 0, 0],
        // }}
        className="leftPanel"
      ></Panel>
      <Panel
        initial={{ height: 0, top: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          // top: [0, 0, window.innerHeight],
          top: [null, 0, 0],
        }}
        // exit={{
        //   height: [0, window.innerHeight, window.innerHeight],
        //   top: [0, 0, 0],
        // }}
        transition={{ ...transitions, duration: 2, times: [0, 0.5, 1] }}
        className="rightPanel"
      ></Panel>
    </>
  );
};

export default Panels;
