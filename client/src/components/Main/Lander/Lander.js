import React from "react";
import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";

const FallingStrawBerries = styled.div`
  height: 85vh;
  width: 100%;
  display: flex;
  align-items: center;
  // background: radial-gradient(
  //   farthest-corner at 120% 10%,
  //   #383838,
  //   #404040,
  //   #484848,
  //   #505050,
  //   #686868,
  //   #686868,
  //   #686868,
  //   #686868
  // );
  background: #383838;
`;

const TextCont = styled.div`
  margin-left: 17vw;
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
      <img
        src="./images/Lander.png"
        alt="box of strawberries"
        style={{ position: "absolute", right: "15vw" }}
      />
    </FallingStrawBerries>
  );
};

export default Lander;
