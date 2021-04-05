import React from "react";
import styled from "styled-components";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { Button, Card, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import FadeInWhenVisible from "../../FadeWhenVisible";
import { deviceSize } from "../../responsive";

const InfoCont = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 15vw;
  bottom: 6vh;
  background: #ebd6d3;
  z-index: -1;
  margin: 5vh 0;
`;

const CardCont = styled(Card)`
  && {
    width: 20vw;
    height: 30vh;
    margin: auto;
    background-color: transparent;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    border-radius: 15px;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media screen and (max-width: ${deviceSize.mobile}px) {
      height: 35vh;
      width: 100%;
      margin-top: 20px;
      padding: 10px;
    }
  }
`;

const Info = () => {
  return (
    <div style={{ position: "relative" }}>
      <FadeInWhenVisible>
        <InfoCont>
          {/* card1 */}
          <CardCont elevation={3}>
            <MotorcycleIcon
              style={{
                fontSize: "10vh",
                width: "100%",
                margin: "10% 0",
                color: "#d3a6a9",
              }}
            />
            <Typography gutterBottom variant="h5" component="h2">
              Free Delivery
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              On all orders over $30 with exceptions
            </Typography>
            <Link
              to="/faq"
              style={{
                position: "absolute",
                bottom: "5%",
                textDecoration: "none",
              }}
            >
              <Button size="small" color="primary">
                Learn More
              </Button>
            </Link>
          </CardCont>
          {/* card 2 */}
          <CardCont elevation={0}>
            <LocalDiningIcon
              style={{
                fontSize: "10vh",
                width: "100%",
                margin: "10% 0",
                color: "#d3a6a9",
              }}
            />
            <Typography gutterBottom variant="h5" component="h2">
              Customize Order
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Special orders will be fullfilled to the best of our abilities
            </Typography>
            <Link
              to="/order"
              style={{
                position: "absolute",
                bottom: "5%",
                textDecoration: "none",
              }}
            >
              <Button size="small" color="primary">
                Order Now
              </Button>
            </Link>
          </CardCont>
          {/* card 3 */}
          <CardCont elevation={0}>
            <WhatshotIcon
              style={{
                fontSize: "10vh",
                width: "100%",
                margin: "10% 0",
                color: "#d3a6a9",
              }}
            />
            <Typography gutterBottom variant="h5" component="h2">
              Fresh Ingredients
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Each bundle is made on order with fresh ingredients
            </Typography>
            <Link
              to="/faq"
              style={{
                position: "absolute",
                bottom: "5%",
                textDecoration: "none",
              }}
            >
              <Button size="small" color="primary">
                Learn More
              </Button>
            </Link>
          </CardCont>
        </InfoCont>
      </FadeInWhenVisible>
    </div>
  );
};

export default Info;
