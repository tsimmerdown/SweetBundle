import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import InstaFeed from "./InstaFeed";
import Feed from "react-instagram-authless-feed";

const InstaCont = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh 5vw;
  position: relative;
  margin-bottom: 5vh;

  .feed a img {
    width: 15vw;
    margin: 1vh 1vw;
    border-radius: 15px;
  }
`;

const Instagram = () => {
  return (
    <InstaCont>
      <Typography variant="h4" style={{ marginBottom: "5vh" }}>
        Follow @sweetbundle.ying
      </Typography>
      <Feed
        userName="sweetbundle.ying"
        className="feed"
        classNameLoading="Loading"
        limit="5"
      />

      {/* <InstaFeed account="sweetbundle.ying" numberOfMediaElements={5} /> */}
    </InstaCont>
  );
};

export default Instagram;
