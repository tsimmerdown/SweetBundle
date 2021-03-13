import React from "react";
import styled from "styled-components";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { Button, Card, Typography } from "@material-ui/core";

import wave from "./wave.svg";

const InfoCont = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15vw;
  position: absolute;
  bottom: 10vh;
  background: #383838;
  z-index: -1;
`;

const CardCont = styled(Card)`
  && {
    width: 25vw;
    height: 65%;
    margin: auto;
    background-color: transparent;
    border: none;
    border-radius: 15px;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Wave = styled.img`
  display: block;
`;

const Info = () => {
  return (
    <div style={{ position: "relative" }}>
      <InfoCont>
        {/* card1 */}
        <CardCont elevation={0}>
          <MotorcycleIcon
            style={{ fontSize: "10vh", width: "100%", margin: "10% 0" }}
          />
          <Typography gutterBottom variant="h5" component="h2">
            Free Delivery
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            On all orders over $30 with exceptions
          </Typography>
          <Button
            size="small"
            color="primary"
            style={{ position: "absolute", bottom: 0 }}
          >
            Learn More
          </Button>
        </CardCont>
        {/* card 2 */}
        <CardCont elevation={0}>
          <LocalDiningIcon
            style={{ fontSize: "10vh", width: "100%", margin: "10% 0" }}
          />
          <Typography gutterBottom variant="h5" component="h2">
            Customize Order
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Special orders will be fullfilled to the best of our abilities
          </Typography>
          <Button
            size="small"
            color="primary"
            style={{ position: "absolute", bottom: 0 }}
          >
            Order Now
          </Button>
        </CardCont>
        {/* card 3 */}
        <CardCont elevation={0}>
          <WhatshotIcon
            style={{ fontSize: "10vh", width: "100%", margin: "10% 0" }}
          />
          <Typography gutterBottom variant="h5" component="h2">
            Fresh Ingredients
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Each bundle is made on order with fresh ingredients
          </Typography>
          <Button
            size="small"
            color="primary"
            style={{ position: "absolute", bottom: 0 }}
          >
            Learn More
          </Button>
        </CardCont>
      </InfoCont>
      <Wave src={wave} />
    </div>
  );
};

export default Info;
