import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Typography, Button } from "@material-ui/core";
import { motion } from "framer-motion";

import wave from "./wave.svg";
import { useLocation } from "react-router";

const Wave = styled.img`
  display: block;
`;

const TallOuterContainer = styled.div.attrs(({ dynamicHeight }) => ({
  style: { height: `${dynamicHeight}px` },
}))`
  position: relative;
  width: 100%;
`;

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const HorizontalTranslateContainer = styled.div.attrs(({ translateX }) => ({
  style: { transform: `translateX(${translateX}px)` },
}))`
  position: absolute;
  height: 100%;
  will-change: transform;
`;

const MainButton = styled(Button)`
  && {
    background-color: #990000;
    border-radius: 50px;
    color: white;
    position: absolute;
    bottom: 15%;
    left: 46.5%;
  }
`;

const Title = styled(motion(Typography))``;

const calcDynamicHeight = (objectWidth) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh + 150;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {
  const objectWidth = ref.current.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth);
  setDynamicHeight(dynamicHeight);
};

// const applyScrollListener = (ref, setTranslateX) => {
//   window.addEventListener("scroll", () => {
//     const offsetTop = -ref.current.offsetTop;
//     setTranslateX(offsetTop);
//   });
// };

const HorizontalScroll = ({ children }) => {
  const location = useLocation();
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  const setOffsetTop = () => {
    const offsetTop = -containerRef.current.offsetTop;
    setTranslateX(offsetTop);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    // applyScrollListener(containerRef, setTranslateX);
    window.addEventListener("scroll", setOffsetTop);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("scroll", setOffsetTop);
    };
  }, [location]);

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer ref={containerRef}>
        <div
          style={{
            overflow: "hidden",
            position: "absolute",
            marginBottom: "10vh",
            top: "15%",
            left: "43.5%",
          }}
        >
          <Title
            variant="h2"
            initial={{
              x: "100%",
            }}
            animate={{
              x: "-100%",
            }}
            transition={{
              repeat: Infinity,
              duration: "3",
              ease: [0.2, 0.2, 0.2, 0.2],
            }}
          >
            Our Menu
          </Title>
        </div>
        <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
          {children}
        </HorizontalTranslateContainer>
        <Wave src={wave} />

        <MainButton variant="contained" size="large">
          ORDER NOW
        </MainButton>
        <div
          style={{
            height: "50vh",
            position: "absolute",
            //   background: "rgba(0, 0, 0, 0.05)",
            width: "100%",
            top: "25%",
          }}
        ></div>
      </StickyInnerContainer>
    </TallOuterContainer>
  );
};

export default HorizontalScroll;
