import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { setCursor } from "../../actions/cursor";

const Rect = styled(motion.div)`
  height: 3px;
  width: 80%;
  background: black;
`;

const transitions = { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.9] };

const ButtonLink = ({ name }) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
    dispatch(setCursor());
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "40px",
        margin: "0 5vw",
      }}
    >
      <Button
        onMouseEnter={() => {
          handleHover();
        }}
        onMouseLeave={() => {
          handleHover();
        }}
        onClick={() => {}}
        disableRipple
        style={{ backgroundColor: "transparent" }}
      >
        {name}
      </Button>
      {hover && (
        <Rect
          key={name}
          initial={{
            width: "0",
            right: null,
          }}
          animate={{
            width: "100%",
            right: null,
          }}
          exit={{ width: "0", right: 0 }}
          transition={transitions}
        />
      )}
    </div>
  );
};

export default ButtonLink;
