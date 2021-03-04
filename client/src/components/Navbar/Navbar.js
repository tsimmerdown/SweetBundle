import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Divider } from "@material-ui/core";

import ScrollChange from "../ScrollChange/ScrollChange";
import ButtonLink from "./ButtonLink";

const NavCont = styled.div`
  width: 100%;
  position: absolute;
  background-color: transparent;
  z-index: 10000;
`;

const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 10vh;
  width: 100%;
  padding: 0 15vw;
  top: 0;
`;

const LinkList = styled.div`
  display: flex;
`;

// const Links = ["About", "Menu", "Order", "FAQ"];

const Navbar = () => {
  const [height, setHeight] = useState();

  useEffect(() => {
    setHeight(document.body.scrollHeight);
  }, []);

  return (
    <NavCont style={{ height: `${height}px` }}>
      {/* <ScrollChange> */}
      <Cont>
        <ButtonLink name={"About"} />

        <ButtonLink name={"Menu"} />

        <Typography
          variant="h4"
          style={{ margin: " 1vh 0", flexGrow: 1, textAlign: "center" }}
        >
          Sweet Bundle
        </Typography>
        <ButtonLink name={"Order"} />

        <ButtonLink name={"FAQ"} />
      </Cont>
      {/* </ScrollChange> */}
    </NavCont>
  );
};

export default Navbar;
