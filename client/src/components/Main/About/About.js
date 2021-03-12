import React from "react";
import styled from "styled-components";
import { Typography, Divider, IconButton, Avatar } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { motion } from "framer-motion";

import Pic from "./ying.jpg";
import Panels from "../../Panels/Panels";

const AboutCont = styled(motion.div)`
  height: 80%;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 10vh 15vw;
`;

const Image = styled.img`
  height: 100%;
  width: 40%;
`;

const Text = styled(Typography)`
  && {
    margin-bottom: 5vh;
    overflow: auto;
    max-height: 40vh;
  }
`;

const containerVariants = {
  initial: {
    visibility: "hidden",
    opacity: 0,
    transition: {
      delay: 1,
    },
  },
  animate: {
    visibility: "visible",
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
  exit: {
    visibility: "visible",
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
const About = () => {
  return (
    <motion.div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <AboutCont
        id="about"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Content>
          <Image src={Pic} />
          <Divider orientation="vertical" style={{ margin: "0 2vw" }} />
          <div style={{ width: "50%" }}>
            <Typography variant="h2" style={{ margin: "0 0 5vh 0" }}>
              About me
            </Typography>
            <Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested.
            </Text>
            <IconButton
              size="small"
              style={{ margin: "0 1vw", cursor: "none" }}
            >
              <Avatar>
                <FacebookIcon />
              </Avatar>
            </IconButton>
            <IconButton
              size="small"
              style={{ margin: "0 1vw", cursor: "none" }}
            >
              <Avatar>
                <TwitterIcon />
              </Avatar>
            </IconButton>
            <IconButton
              size="small"
              style={{ margin: "0 1vw", cursor: "none" }}
            >
              <Avatar>
                <InstagramIcon />
              </Avatar>
            </IconButton>
          </div>
        </Content>
      </AboutCont>
      <Panels />
    </motion.div>
  );
};

export default About;
