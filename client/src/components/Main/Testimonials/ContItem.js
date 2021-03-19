import React, { useState } from "react";
import { Typography, Card } from "@material-ui/core";
import styled from "styled-components";

import Pic from "./DSCF2503.JPG";
import RightQuote from "./Quote.svg";

const CardContent = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 20vw;
  height: 30vh;
  margin: 1vw;
  position: relative;
  && {
    //opacity: ${(props) => (props.open ? 0.1 : 1)}
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const HoverCont = styled.div`
  width: 100%;
  height: 30%;
  position: absolute;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  padding: 10px;
`;

const ContItem = ({ text, img }) => {
  const [open, setOpen] = useState(false);

  return (
    <CardContent
      elevation={3}
      onMouseEnter={() => {
        setOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
      }}
    >
      <img
        alt="img"
        src={Pic}
        style={{ width: "100%", height: "100%", borderRadius: " 5px" }}
        open
      />
      <HoverCont>
        <img
          alt="img"
          src={RightQuote}
          style={{ height: "20%", borderRadius: "5px" }}
          open
        />
        <Typography variant="h6">{text}</Typography>
        <img
          alt="img"
          src={RightQuote}
          style={{ height: "20%", borderRadius: "5px", paddingLeft: "95%" }}
          open
        />
      </HoverCont>
    </CardContent>
  );
};

export default ContItem;
