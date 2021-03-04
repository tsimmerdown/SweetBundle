import React from "react";
import styled from "styled-components";
import Feed from "react-instagram-authless-feed";
import { Typography } from "@material-ui/core";

const InstaCont = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh 5vw;
`;

const Instagram = () => {
  return (
    <InstaCont>
      <Typography variant="h4" style={{ marginBottom: "5vh" }}>
        Follow @sweetbundle.ying
      </Typography>
      <Feed userName="sweetbundle.ying" className="feed" limit="5" />
    </InstaCont>
  );
};

export default Instagram;
