import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { motion } from "framer-motion";

const Cont = styled(motion.div)`
  position: fixed;
  bottom: 5vh;
  right: 3vw;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #d3a6a9;
  display: flex;
`;

const ScrollUp = () => {
  const [show, setShow] = useState(false);

  const scrollUpHandler = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset > 0) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
  });

  return (
    <>
      {show && (
        <Cont
          onClick={scrollUpHandler}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
        >
          <ArrowUpwardIcon style={{ margin: "auto" }} />
        </Cont>
      )}
    </>
  );
};

export default ScrollUp;
