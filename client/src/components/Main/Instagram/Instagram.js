import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../responsive";
// import Feed from "react-instagram-authless-feed";

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
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <InstaCont>
      <Typography
        variant={isMobile ? "h5" : "h4"}
        style={{ marginBottom: "5vh" }}
      >
        Follow @sweetbundle.ying
      </Typography>
      {/* <Feed
        userName="sweetbundle.ying"
        className="feed"
        classNameLoading="Loading"
        limit="5"
      /> */}
    </InstaCont>
  );
};

export default Instagram;
