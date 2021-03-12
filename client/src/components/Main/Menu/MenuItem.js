import React from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const MenuItemCont = styled.div`
  width: 30vw;

  .name {
    font-weight: 500;
  }
`;

const Content = styled.div`
  display: flex;
`;

const Image = styled.img`
  height: 30vh;
  width: 50%;
  border-radius: 10px;
`;

const Prices = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5vh 0 0 1vw;
  font-weight: 700;
`;

const MenuItem = ({ name, sub, price, image }) => {
  return (
    <MenuItemCont>
      <Typography variant="h5" className="name">
        {name}
      </Typography>
      <Typography variant="subtitle1">{sub}</Typography>
      <Content>
        <Image src={image} />
        <Prices>
          <Typography variant="subtitle1">6 Chocoberries</Typography>
          <Typography variant="subtitle1">9 Chocoberries</Typography>
          <Typography variant="subtitle1">12 Chocoberries</Typography>
        </Prices>
      </Content>
    </MenuItemCont>
  );
};

export default MenuItem;
