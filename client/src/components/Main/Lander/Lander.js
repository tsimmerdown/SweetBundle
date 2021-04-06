import React from "react";
import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../responsive";

const LanderCont = styled(motion.div)`
  height: 95vh;
  width: 100%;
  display: flex;
  align-items: center;
  background: #ebd6d3;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 70vh;
  }
`;

const TextCont = styled.div`
  margin-left: 17vw;
  z-index: 5000;
  .body {
    margin: 0 0 4vh 5px;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: auto;
  }
`;

const MainButton = styled(Button)`
  && {
    background-color: #40434a;
    border-radius: 50px;
    color: white;
    height: 5vh;
    width: ${(props) => (props.isMobile ? "40vw" : "10vw")};
    font-size: 17px;
    :hover {
      color: black;
    }
  }
`;

const transitions = { duration: 2, ease: [0.6, -0.05, 0.01, 0.9] };

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const cupVariant = {
  hidden: { opacity: 0, y: "-100px" },
  show: { opacity: 1, y: 0 },
};
const flowerVariant = {
  hidden: { opacity: 0, y: "-100px" },
  show: { opacity: 1, y: 0 },
};
const boxVariant = {
  hidden: { opacity: 0, y: "-100px" },
  show: { opacity: 1, y: 0 },
};

const Lander = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <LanderCont variants={container} initial="hidden" animate="show">
      <TextCont>
        <Typography variant={isMobile ? "h3" : "h2"}>Bundle of Joy</Typography>
        <Typography variant="subtitle1" className="body">
          Satisfy your sweet tooth with 1 🍓 at a time
        </Typography>
        <Link to="/order" style={{ textDecoration: "none" }}>
          <MainButton variant="contained" isMobile={isMobile}>
            ORDER NOW
          </MainButton>
        </Link>
      </TextCont>
      {!isMobile && (
        <motion.img
          src="./images/LanderCup.png"
          alt="Strawberry cup"
          variants={cupVariant}
          transition={transitions}
          style={{
            position: "absolute",
            right: "18vw",
            top: "5vh",
          }}
        />
      )}
      {!isMobile && (
        <motion.img
          src="./images/LanderFlower.png"
          alt="Strawberry bouqeut"
          variants={flowerVariant}
          transition={transitions}
          style={{
            position: "absolute",
            right: "30vw",
            top: "15vh",
            transform: "rotate(350deg)",
          }}
        />
      )}
      {!isMobile && (
        <motion.img
          variants={boxVariant}
          transition={transitions}
          src="./images/Lander.png"
          alt="box of strawberries"
          style={{
            position: "absolute",
            right: "17vw",
            top: "35vh",
            zIndex: 1,
          }}
        />
      )}
    </LanderCont>
  );
};

export default Lander;
