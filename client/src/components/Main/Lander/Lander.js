import React from "react";
import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";
//import ReactPlayer from "react-player";
//import BgVideo from "./ripe_strawberries_falling_through_the_water.mp4";

const FallingStrawBerries = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

const TextCont = styled.div`
  margin-left: 15vw;
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

const Sphere = styled.div`
  position: absolute;
`;

const Lander = () => {
  return (
    <FallingStrawBerries>
      <Sphere />
      <TextCont>
        <Typography variant="h2">Bundle of Joy</Typography>
        <Typography variant="body1" className="body">
          Satisfy your sweet tooth
        </Typography>
        <MainButton variant="contained" size="large">
          ORDER NOW
        </MainButton>
      </TextCont>
      {/* <ReactPlayer
        url={BgVideo}
        playing={true}
        muted={true}
        width="115%"
        height="130%"
        loop={true}
        style={{ position: "absolute", zIndex: "-1", overflow: "hidden" }}
      /> */}
    </FallingStrawBerries>
  );
};

export default Lander;
