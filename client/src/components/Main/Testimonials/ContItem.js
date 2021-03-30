import React, { useState } from "react";
import { Typography, Card, Avatar } from "@material-ui/core";
import styled from "styled-components";

import RightQuote from "./Quote.svg";
import PersonIcon from "@material-ui/icons/Person";

const CardContent = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 20vw;
  width: 20vw;
  height: 32vh;
  margin: 0 1vw;
  position: relative;

  && {
    background-color: rgba(0, 0, 0, 0.2);
    white-space: normal;
  }
`;

const AvatarIcon = styled(Avatar)`
  && {
    min-height: 5vh;
    min-width: 5vh;
    height: 7vh;
    width: 7vh;
    margin: 2vh 0;
  }
`;

const ContItem = ({ text, user }) => {
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
      <AvatarIcon>
        <PersonIcon style={{ fontSize: "5vh" }} />
      </AvatarIcon>
      <Typography variant="h5" style={{ marginBottom: "2vh" }}>
        {user}
      </Typography>

      <img
        alt="img"
        src={RightQuote}
        style={{ height: "10%", marginBottom: "2vh" }}
        open
      />
      <Typography variant="subtitle1" style={{ margin: "0 20px" }}>
        {text}
      </Typography>
    </CardContent>
  );
};

export default ContItem;
