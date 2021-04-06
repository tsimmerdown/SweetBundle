import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const AccordionCont = styled(Accordion)`
  && {
    margin: 2vh 0;
    background: rgba(0, 0, 0, 0.1);
  }
`;

const AccordionItem = ({ question, answer }) => {
  return (
    <AccordionCont>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6">{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{answer}</Typography>
      </AccordionDetails>
    </AccordionCont>
  );
};

export default AccordionItem;
