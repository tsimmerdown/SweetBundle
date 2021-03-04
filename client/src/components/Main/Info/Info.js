import React from "react";
import styled from "styled-components";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

import Water from "../../water/water";

const InfoCont = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 5vw;
`;

const CardCont = styled(Card)`
  width: 25vw;
  height: 65%;
  margin: auto;
  && {
    border: none;
    border-radius: 15px;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Info = () => {
  return (
    <InfoCont>
      {/* card1 */}
      <CardCont elevation={0}>
        <MotorcycleIcon
          style={{ fontSize: "15vh", width: "100%", margin: "auto" }}
        />
        <CardContent className="content">
          <Typography gutterBottom variant="h5" component="h2">
            Free Delivery
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            On all orders over $30 with exceptions
          </Typography>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </CardContent>
      </CardCont>
      {/* card 2 */}
      <CardCont elevation={0}>
        <LocalDiningIcon
          style={{ fontSize: "15vh", width: "100%", margin: "auto" }}
        />
        <CardContent className="content">
          <Typography gutterBottom variant="h5" component="h2">
            Customize Order
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Special orders can be requested and will be fullfilled to the best
            of our abilities
          </Typography>
          <CardActions>
            <Button size="small" color="primary">
              Order Now
            </Button>
          </CardActions>
        </CardContent>
      </CardCont>
      {/* card 3 */}
      <CardCont elevation={0}>
        <WhatshotIcon
          style={{ fontSize: "15vh", width: "100%", margin: "auto" }}
        />
        <CardContent className="content">
          <Typography gutterBottom variant="h5" component="h2">
            Fresh Ingredients
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Each bundle is made on order with fresh ingredients
          </Typography>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </CardContent>
      </CardCont>
    </InfoCont>
  );
};

export default Info;
