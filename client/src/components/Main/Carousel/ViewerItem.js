import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Cont = styled(motion.div)`
  height: ${(props) => (props.active ? "60vh" : "60%")};
  width: ${(props) => (props.active ? "100%" : "50%")};
  background: orange;
  margin: 1vw;
  opacity: ${(props) => (props.active ? "1" : "0.5")};
  transition: width height 5s;
`;

const ViewerItem = ({ img, active }) => {
  return (
    <>
      <Cont
        // initial={{
        //   height: "60%",
        //   width: "20%",
        // }}
        // animate={{
        //   height: active ? "80%" : "60%",
        //   width: active ? "40%" : "20%",
        // }}
        // exit={{
        //   height: "60%",
        //   width: "20%",
        // }}
        active={true}
        //whileHover={{ scale: 1.2 }}
      >
        {1}
      </Cont>
      {/* ) : (
        <Cont
          animate={{
            height: "60%",
          }}
          active={active}
          //whileHover={{ scale: 1.2 }}
        >
          {img}
        </Cont>
      )} */}
    </>
  );
};

export default ViewerItem;
