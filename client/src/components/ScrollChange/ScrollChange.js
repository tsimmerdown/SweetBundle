import React from "react";
import { useScrollTrigger } from "@material-ui/core";

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(props.children, {
    style: {
      visibility: trigger ? "visible" : "hidden",
      opacity: trigger ? 1 : 0,
      backgroundColor: "white",
      color: "black",
      transition: trigger ? "0.5s" : "0.4s",
      boxShadow: "none",
      margin: "1vh 0",
    },
  });
};

const ScrollChange = (props) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollChange;
