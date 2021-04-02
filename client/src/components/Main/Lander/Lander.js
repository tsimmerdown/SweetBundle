import React from "react";
import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LanderCont = styled(motion.div)`
  height: 95vh;
  width: 100%;
  display: flex;
  align-items: center;

  background: #ebd6d3;
`;

const TextCont = styled.div`
  margin-left: 17vw;
  .body {
    margin: 0 0 4vh 5px;
  }
`;

const MainButton = styled(Button)`
  && {
    background-color: #40434a;
    border-radius: 50px;
    color: white;
    height: 5vh;
    width: 10vw;
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
  show: { opacity: 0.5, y: 0 },
};
const flowerVariant = {
  hidden: { opacity: 0, y: "-100px" },
  show: { opacity: 0.9, y: 0 },
};
const boxVariant = {
  hidden: { opacity: 0, y: "-100px" },
  show: { opacity: 1, y: 0 },
};

const Lander = () => {
  return (
    <LanderCont variants={container} initial="hidden" animate="show">
      <TextCont>
        <Typography variant="h2">Bundle of Joy</Typography>
        <Typography variant="subtitle1" className="body">
          Satisfy your sweet tooth with 1 🍓 at a time
        </Typography>
        <Link to="/order" style={{ textDecoration: "none" }}>
          <MainButton variant="contained">ORDER NOW</MainButton>
        </Link>
      </TextCont>
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
      <motion.img
        variants={boxVariant}
        transition={transitions}
        src="./images/Lander.png"
        alt="box of strawberries"
        style={{ position: "absolute", right: "17vw", top: "35vh" }}
      />
    </LanderCont>
  );
};

export default Lander;
