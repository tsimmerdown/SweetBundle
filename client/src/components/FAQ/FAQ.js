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

const AccordionCont = styled(Accordion)`
  && {
    margin: 2vh 0;
    background: #303030;
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

const FAQ = () => {
  return (
    <>
      <FAQCont
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div style={{}}>
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
            <AccordionCont>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6">
                  Q: Why do we require full payment upon order?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This helps secure order and helps us run our company with
                  working capital.
                </Typography>
              </AccordionDetails>
            </AccordionCont>
            <AccordionCont>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography variant="h6">Q: Do you offer shipping?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We currently only offer local delivery in the GTA and pick up
                  in Markham.
                </Typography>
              </AccordionDetails>
            </AccordionCont>
            <AccordionCont>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography variant="h6">
                  Q: Can I custom-order specific Goodies?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Of course, we are here to satisfy your request to the best of
                  our abilities.
                </Typography>
              </AccordionDetails>
            </AccordionCont>
          </AccordionList>
        </div>
      </FAQCont>
      <Panels />
    </>
  );
};

export default FAQ;
