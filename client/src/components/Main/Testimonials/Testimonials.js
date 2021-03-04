import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const TestCont = styled.div`
  height: 50vh;
  width: 100%;
  background: #e1e1e1;
  display: flex;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 20vw;
  margin: 0 8vw;
`;

const Testimonials = () => {
  return (
    <TestCont>
      <Text>
        <Typography variant="h4">
          What our community has to say about us
        </Typography>
      </Text>
    </TestCont>
  );
};

export default Testimonials;
