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
    opacity: ${(props) => (props.open ? 0.1 : 1)}
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const HoverCont = styled.div`
  min-width: 20vw;
  height: 30vh;
  position: absolute;
  backdrop-filter: blur(5px);
`;

const ContItem = () => {
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
        style={{ width: "100%", height: "100%", borderRadius: "5px" }}
        open
      />
      {open && (
        <HoverCont>
          {/* <RightQuote /> */}
          <Typography variant="h6">
            {"They taste just as good as they look!!! <3"}
          </Typography>
        </HoverCont>
      )}
    </CardContent>
  );
};

export default ContItem;
