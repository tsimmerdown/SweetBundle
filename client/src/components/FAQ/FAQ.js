import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Panels from "../Panels/Panels";
import AccordionItem from "./AccordionItem";

const FAQCont = styled(motion.div)`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleCont = styled.div`
  padding: 10vh 0;
  margin: 10vh 0 5vh 0;
  width: 100%;
  position: relative;
`;

const Title = styled(motion(Typography))``;

const AccordionList = styled.div`
  width: 50vw;
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

const FAQ = () => {
  return (
    <>
      <FAQCont
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div>
          <TitleCont>
            <div
              style={{
                display: "flex",
                overflow: "hidden",
                position: "absolute",
                paddingleft: "100%",
                left: "15%",
              }}
            >
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
                  duration: "6",
                  ease: [0.2, 0.2, 0.2, 0.2],
                }}
              >
                Frequently Asked Question
              </Title>
            </div>
          </TitleCont>
          <AccordionList>
            <AccordionItem
              question="Q: Why do we require full payment upon order?"
              answer="This helps secure order and helps us run our company with
                  working capital."
            />
            <AccordionItem
              question="Q: Do you offer shipping?"
              answer=" We currently only offer local delivery in the GTA and pick up
              in Markham."
            />
            <AccordionItem
              question="Q: Can I custom-order specific Goodies?"
              answer=" Of course, we are here to satisfy your request to the best of
              our abilities."
            />
            <AccordionItem
              question="Q: Where are you located?"
              answer="  Sweet Bundle is located in Markham. Pickup currently only
            available in Markham."
            />
          </AccordionList>
        </div>
      </FAQCont>
      <Panels />
    </>
  );
};

export default FAQ;
