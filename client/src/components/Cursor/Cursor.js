import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// const CustomCursor = styled.div`
//   z-index: 100000;
//   border-radius: 50%;
//   width: ${(props) => (props.hover ? "40px" : "25px")};
//   height: ${(props) => (props.hover ? "40px" : "25px")};
//   border: 1px solid black;
//   pointer-events: none;
//   overflow: hidden;
//   transform: translate3d(0, 0, 0);
//   position: fixed;
// `;

const CustomCursor = styled(motion.div)`
  z-index: 100000;
  border-radius: 50%;
  width: ${(props) => (props.hover ? "40px" : "30px")};
  height: ${(props) => (props.hover ? "40px" : "30px")};
  border: 1px solid black;
  backdrop-filter: blur(1px);
  pointer-events: none;
  overflow: hidden;
  // transform: translate3d(0, 0, 0);
  position: fixed;
`;

const Cursor = ({ hover }) => {
  const cursorRef = useRef(null);
  const [x, setX] = useState();
  const [y, setY] = useState();

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      // const mouseX = clientX - cursorRef.current.clientWidth / 2;
      // const mouseY = clientY - cursorRef.current.clientHeight / 2;
      if (cursorRef.current != null) {
        setX(clientX - cursorRef.current.clientWidth / 2);
        setY(clientY - cursorRef.current.clientHeight / 2);
      }
      // cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
  }, []);

  return (
    <CustomCursor
      hover={hover}
      animate={{ y: y, x: x }}
      transition={{
        ease: "linear",
        duration: 0.2,
      }}
      ref={cursorRef}
    />
  );
};

export default Cursor;
