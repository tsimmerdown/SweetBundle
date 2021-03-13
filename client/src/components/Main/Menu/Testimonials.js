import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import wave from "./wave.svg";
import ContItem from "./ContItem";

const TestCont = styled.div`
  height: 50vh;
  width: 100%;
  position: relative;
`;

const Text = styled.div`
  top: 30%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 20vw;
  margin: 0 8vw;
`;

const Wave = styled.img`
  display: block;
  background-color: rgba(0, 0, 0, 0.05);
`;

const HorizontalCont = styled(motion.div)`
  white-space: nowrap;
  position: absolute;
  width: 60vw;
  right: 0;
  overflow: hidden;
`;

const Cont = styled(motion.div)`
  display: flex;
`;

const Testimonials = () => {
  return (
    <TestCont>
      <Text>
        <Typography variant="h4">
          What our community has to say about us
        </Typography>
      </Text>
      <HorizontalCont>
        <Cont
          initial={{
            x: "0",
          }}
          animate={{
            x: "-100%",
          }}
          transition={{
            repeat: Infinity,
            duration: "50",
          }}
        >
          <ContItem />
          <ContItem />
          <ContItem />
          <ContItem />
          <ContItem />
          <ContItem />
          <ContItem />
          <ContItem />
        </Cont>
      </HorizontalCont>
      <Wave src={wave} />
    </TestCont>
  );
};

export default Testimonials;