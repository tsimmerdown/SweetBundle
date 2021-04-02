import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import wave from "./wave.svg";
import ContItem from "./ContItem";
import FadeInWhenVisible from "../../FadeWhenVisible";

const TestCont = styled.div`
  height: 80vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 20vw;
  margin: 0 8vw;
`;

const Wave = styled.img`
  display: block;
  position: absolute;
  background: transparent;
`;

const HorizontalCont = styled(motion.div)`
  white-space: nowrap;
  position: absolute;
  width: 60vw;
  left-padding: 60%;
  right: 0;
  overflow: hidden;
`;

const Cont = styled(motion.div)`
  display: flex;
`;

const Testimonials = () => {
  return (
    <TestCont>
      <Wave src={wave} />

      <Text>
        <FadeInWhenVisible>
          <Typography variant="h4">
            What our community has to say about us
          </Typography>
        </FadeInWhenVisible>
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
          <ContItem
            text={
              "These cheesecake cups are gonna hit differenttt @sweetbundle.ying"
            }
            user={"nxilpatxl"}
          />
          <ContItem
            text={"They taste just as good as they look!!! <3"}
            user={"sitarasharma"}
          />
          <ContItem
            text={
              "A bouquet for a future mama!! A perfect gift & satisfies those cravings! Looks so amazing. I highly recommend @sweetbundle.ying"
            }
            user={"mariadivabelen"}
          />
          <ContItem
            text={
              "So gooood !!! <3<3<3 Thank you for the yummy oreo cheescake & cute proposal gift!! @sweetbundle.ying"
            }
            user={"munchnbinge"}
          />
          <ContItem
            text={
              "So gooood !!! <3<3<3 Thank you for the yummy oreo cheescake & cute proposal gift!! @sweetbundle.ying"
            }
            user={"munchnbinge"}
          />
        </Cont>
      </HorizontalCont>
    </TestCont>
  );
};

export default Testimonials;
