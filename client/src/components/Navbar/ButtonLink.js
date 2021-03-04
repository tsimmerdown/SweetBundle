import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@material-ui/core";

const Mask = styled.div``;

const Rect = styled(motion.div)`
  height: 3px;
  width: 80%;
  background: black;
`;

const transitions = { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.9] };

const ButtonLink = ({ name }) => {
  const [hover, setHover] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "40px" }}>
      <Button
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        onClick={() => {
          console.log(document.body.scrollHeight);
        }}
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
