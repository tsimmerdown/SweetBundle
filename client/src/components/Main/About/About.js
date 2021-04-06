import React, { useState } from "react";
import styled from "styled-components";
import { Typography, Divider, IconButton, Avatar } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { motion } from "framer-motion";

import Panels from "../../Panels/Panels";
import { useDispatch } from "react-redux";
import { setCursor } from "../../../actions/cursor";
import { deviceSize } from "../../responsive";
import { useMediaQuery } from "react-responsive";

const AboutCont = styled(motion.div)`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: auto;
  }
`;

const Content = styled.div`
  display: flex;
  height: 80%;
  justify-content: center;
  align-items: center;
  padding: 10vh 15vw;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 5vh;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 40%;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 60%;
    width: 90%;
    margin: 20px 0;
  }
`;

const Text = styled(Typography)`
  && {
    margin-bottom: 5vh;
    overflow: auto;
    height: 45vh;
    max-height: 45vh;

    @media screen and (max-width: ${deviceSize.mobile}px) {
      width: 100%;
      margin-top: 20px;
    }
  }
`;

const Title = styled(motion(Typography))`
  && {
    margin: 0 0 2vh 0;
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

//const transitions = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
    dispatch(setCursor());
  };

  return (
    <motion.div>
      <AboutCont
        id="about"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {!isMobile ? (
          <Content>
            <Image src="./images/ying.jpg" />
            <Divider orientation="vertical" style={{ margin: "0 2vw" }} />
            <div style={{ width: "50%", overflow: "hidden" }}>
              <div style={{ width: "50%", overflow: "hidden" }}>
                <Title
                  variant="h2"
                  initial={{
                    x: "100%",
                  }}
                  animate={{
                    x: "-100%",
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: "5",
                    ease: [0.2, 0.2, 0.2, 0.2],
                  }}
                >
                  About me
                </Title>
              </div>

              <Text>
                Hey, you’ve stumbled on
                <motion.span
                  style={{ color: "red" }}
                  whileHover={{ display: "inline-block", scale: 1.05 }}
                >
                  Sweet Bundle
                </motion.span>
                . I’ll like to introduce myself, I’m Ying Su, the face behind
                Sweet Bundle.
                <br />
                <br />
                I’ve always loved chocolate covered strawberries growing up as a
                kid and I thought to myself “why not start selling some since
                we’re all stuck in quarantine”, and that’s how the idea came up.
                After some trial and error and lot of research,
                <motion.span
                  style={{ color: "red" }}
                  whileHover={{ display: "inline-block", scale: 1.05 }}
                >
                  Sweet Bundle
                </motion.span>
                launched in February of 2021 and it has been incredible being
                able to connect with customers and create some delicious sweets
                for all to enjoy. I have always had a passion for
                entrepreneurship and opening this small business satisfied my
                entrepreneurial soul. What I enjoy most is connecting with
                customers and being able to create something beautiful whether
                it's a treat for yourself or for a special occasion.
                <br />
                <br /> My education is in Special Events Management and one of
                my goals for
                <motion.span
                  style={{ color: "red" }}
                  whileHover={{ display: "inline-block", scale: 1.05 }}
                >
                  Sweet Bundle
                </motion.span>
                is to work with clients by being able to cater their special
                events like baby showers, weddings or birthdays. This dream
                originates from my love of planning and seeing those happy
                smiles in everyone’s face. I hope you love our sweets and stay
                sweet.
              </Text>
              <IconButton
                size="small"
                style={{ margin: "0 1vw" }}
                onMouseEnter={() => {
                  handleHover();
                }}
                onMouseLeave={() => {
                  handleHover();
                }}
              >
                <Avatar>
                  <FacebookIcon />
                </Avatar>
              </IconButton>
              <IconButton
                size="small"
                style={{ margin: "0 1vw" }}
                onMouseEnter={() => {
                  handleHover();
                }}
                onMouseLeave={() => {
                  handleHover();
                }}
              >
                <Avatar>
                  <TwitterIcon />
                </Avatar>
              </IconButton>
              <IconButton
                size="small"
                style={{ margin: "0 1vw" }}
                onMouseEnter={() => {
                  handleHover();
                }}
                onMouseLeave={() => {
                  handleHover();
                }}
              >
                <Avatar>
                  <InstagramIcon />
                </Avatar>
              </IconButton>
            </div>
          </Content>
        ) : (
          <Content>
            <Title variant="h3">About me</Title>
            <Image src="./images/ying.jpg" />
            <Text>
              Hey, you’ve stumbled on
              <motion.span
                style={{ color: "red" }}
                whileHover={{ display: "inline", scale: 1.05 }}
              >
                Sweet Bundle
              </motion.span>
              . I’ll like to introduce myself, I’m Ying Su, the face behind
              Sweet Bundle.
              <br />
              <br />
              I’ve always loved chocolate covered strawberries growing up as a
              kid and I thought to myself “why not start selling some since
              we’re all stuck in quarantine”, and that’s how the idea came up.
              After some trial and error and lot of research,
              <motion.span
                style={{ color: "red" }}
                whileHover={{ display: "inline-block", scale: 1.05 }}
              >
                Sweet Bundle
              </motion.span>
              launched in February of 2021 and it has been incredible being able
              to connect with customers and create some delicious sweets for all
              to enjoy. I have always had a passion for entrepreneurship and
              opening this small business satisfied my entrepreneurial soul.
              What I enjoy most is connecting with customers and being able to
              create something beautiful whether it's a treat for yourself or
              for a special occasion.
              <br />
              <br /> My education is in Special Events Management and one of my
              goals for
              <motion.span
                style={{ color: "red" }}
                whileHover={{ display: "inline-block", scale: 1.05 }}
              >
                Sweet Bundle
              </motion.span>
              is to work with clients by being able to cater their special
              events like baby showers, weddings or birthdays. This dream
              originates from my love of planning and seeing those happy smiles
              in everyone’s face. I hope you love our sweets and stay sweet.
            </Text>
          </Content>
        )}
      </AboutCont>
      <Panels />
    </motion.div>
  );
};

export default About;
