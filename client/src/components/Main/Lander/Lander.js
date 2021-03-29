import React from "react";
import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FallingStrawBerries = styled.div`
  height: 95vh;
  width: 100%;
  display: flex;
  align-items: center;

  background: #ebd6d3;
`;

const TextCont = styled.div`
  margin-left: 17vw;
  .body {
    margin: 0 0 2vh 5px;
  }
`;

const MainButton = styled(Button)`
  && {
    background-color: #383838;
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

const Lander = () => {
  return (
    <FallingStrawBerries>
      <TextCont>
        <Typography variant="h2">Bundle of Joy</Typography>
        <Typography variant="body1" className="body">
          Satisfy your sweet tooth with 1 🍓 at a time
        </Typography>
        <Link to="/order" style={{ textDecoration: "none" }}>
          <MainButton variant="contained">ORDER NOW</MainButton>
        </Link>
      </TextCont>
      <img
        src="./images/LanderCup.png"
        alt="Strawberry cup"
        style={{
          position: "absolute",
          right: "18vw",
          top: "5vh",
          opacity: 0.5,
        }}
      />
      <img
        src="./images/LanderFlower.png"
        alt="Strawberry bouqeut"
        style={{
          position: "absolute",
          right: "30vw",
          transform: "rotate(350deg)",
          opacity: 0.9,
        }}
      />
      <img
        src="./images/Lander.png"
        alt="box of strawberries"
        style={{ position: "absolute", right: "17vw", top: "30vh" }}
      />
    </FallingStrawBerries>
  );
};

export default Lander;
