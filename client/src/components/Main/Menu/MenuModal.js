import React from "react";
import styled from "styled-components";
import { List, ListItem, Modal, Paper, Typography } from "@material-ui/core";
import { motion } from "framer-motion";

const ModalContainer = styled(Modal)`
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled(motion(Paper))`
  padding: 1.5rem;
  min-width: 50vw;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  div {
    display: flex;
  }
`;

const ContentCont = styled.div`
  position: relative;
  display: flex;
  margin: 1vh;
  width: 50vw;
`;

const ContentImage = styled.img`
  height: 40vh;
  width: 20vw;
`;
const ContentText = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ItemFeatures = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1vh 1vw;
`;

const modalAnimation = {
  initial: {
    y: "-100vh",
    opacity: 0,
  },
  animate: {
    y: "0",
    opacity: 1,
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const transitions = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

const ItemModal = (props) => {
  const handleClose = () => {
    props.setOpen(false);
  };
  return (
    <ModalContainer
      open={props.open}
      onClose={handleClose}
      style={{
        backgroundColor: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(2px)",
      }}
    >
      {props.open && (
        <ModalContent
          initial="initial"
          animate="animate"
          exit="exit"
          variants={modalAnimation}
          transition={transitions}
        >
          <Typography variant="h4">{props.name}</Typography>
          <ContentCont>
            <ContentImage src={props.image} />
            <ContentText>
              <ItemFeatures>
                <Typography variant="h6">Pricing</Typography>
                {props.pricing.map((price) => {
                  return <span>{price}</span>;
                })}
              </ItemFeatures>
              {props.options.length !== 0 && (
                <ItemFeatures>
                  <Typography variant="h6">Options</Typography>
                  {props.options.map((option) => {
                    return <span>{option}</span>;
                  })}
                </ItemFeatures>
              )}
              {props.toppings.length !== 0 && (
                <ItemFeatures>
                  <Typography variant="h6">Toppings</Typography>
                  {props.toppings.map((topping) => {
                    return <span>{topping}</span>;
                  })}
                </ItemFeatures>
              )}
              {props.notes.length !== 0 && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    right: "1vw",
                    bottom: "1vh",
                  }}
                >
                  {props.notes.map((note) => {
                    return <span>{note}</span>;
                  })}
                </div>
              )}
            </ContentText>
          </ContentCont>
        </ModalContent>
      )}
    </ModalContainer>
  );
};

export default ItemModal;
