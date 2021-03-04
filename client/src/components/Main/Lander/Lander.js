import React from "react";
import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";
import ReactPlayer from "react-player";
import BgVideo from "./ripe_strawberries_falling_through_the_water.mp4";

const FallingStrawBerries = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

const TextCont = styled.div`
  margin-left: 10vw;
  .body {
    margin: 0 0 2vh 5px;
  }
`;

const MainButton = styled(Button)`
  && {
    background-color: #990000;
    border-radius: 50px;
    color: white;

    ::hover {
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
          Satisfy your sweet tooth
        </Typography>
        <MainButton variant="contained" size="large">
          ORDER NOW
        </MainButton>
      </TextCont>
    </FallingStrawBerries>
  );
};

export default Lander;
