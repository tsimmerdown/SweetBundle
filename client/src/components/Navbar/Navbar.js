import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

import ScrollChange from "../ScrollChange/ScrollChange";
import ButtonLink from "./ButtonLink";
import { useDispatch } from "react-redux";
import { setCursor } from "../../actions/cursor";

const NavCont = styled.div`
  width: 100%;
  position: absolute;
  background-color: transparent;
  z-index: 10000;
  a {
    text-decoration: none;
  }
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
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
    dispatch(setCursor());
  };

  return (
    <NavCont>
      <Cont>
        <Link to="/about">
          <ButtonLink name={"About"} />
        </Link>
        <Link to="/menu">
          <ButtonLink name={"Menu"} />
        </Link>

        <Link
          to="/"
          onMouseEnter={() => {
            handleHover();
          }}
          onMouseLeave={() => {
            handleHover();
          }}
        >
          <Typography
            variant="h4"
            style={{
              margin: " 1vh 0",
              flexGrow: 1,
              textAlign: "center",
              color: "white",
            }}
          >
            Sweet Bundle
          </Typography>
        </Link>
        <Link to="/order">
          <ButtonLink name={"Order"} />
        </Link>

        <Link to="/faq">
          <ButtonLink name={"FAQ"} />
        </Link>
      </Cont>
      {/* </ScrollChange> */}
    </NavCont>
  );
};

export default Navbar;
