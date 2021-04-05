import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";

const CustomCursorTrail = styled(motion.div)`
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
  background: rgba(0, 0, 0, 0.3);
`;

const CustomCursor = styled.div`
  z-index: 100001;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  border: 1px solid black;
  pointer-events: none;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  position: fixed;
  background-color: black;
  top: 10px;
  left: 10px;
`;

const Cursor = ({ hover }) => {
  const cursorRef = useRef(null);
  const [x, setX] = useState();
  const [y, setY] = useState();
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  useEffect(() => {
    const onMouseMove = (event) => {
      if (!isMobile) {
        const { clientX, clientY } = event;
        const mouseX = clientX - cursorRef.current?.clientWidth / 2;
        const mouseY = clientY - cursorRef.current?.clientHeight / 2;
        if (cursorRef.current != null) {
          setX(mouseX);
          setY(mouseY);
        }
        document.getElementById(
          "cursor"
        ).style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  });

  return (
    <>
      {!isMobile && <CustomCursor id="cursor" hover={hover} ref={cursorRef} />}
      {!isMobile && (
        <CustomCursorTrail
          hover={hover}
          animate={{ y: y, x: x }}
          transition={{
            ease: "linear",
            duration: 0.2,
          }}
          ref={cursorRef}
        />
      )}
    </>
  );
};

export default Cursor;
