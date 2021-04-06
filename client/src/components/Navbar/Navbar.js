import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ButtonLink from "./ButtonLink";
import { useDispatch } from "react-redux";
import { setCursor } from "../../actions/cursor";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";
import MenuIcon from "@material-ui/icons/Menu";
import { Drawer, IconButton } from "@material-ui/core";

const NavCont = styled.div`
  height: ${(props) => (props.isMobile ? "75px" : "15vh")};
  padding: 0 5vw;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  background-color: transparent;
  z-index: 1000;
  a {
    text-decoration: none;
  }
`;

const Logo = styled.img`
  height: ${(props) => (props.isMobile ? "75px" : "125px")};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: 5px 0 0 0;
  }
`;

const MobileMenu = styled(IconButton)`
  && {
    position: absolute;
    right: 0;
    margin-top: 5px;
  }
`;

const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: 0;
  }
`;

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleHover = () => {
    setHover(!hover);
    dispatch(setCursor());
  };

  const menuHandler = () => {
    setOpen(!open);
  };
  return (
    <NavCont isMobile={isMobile}>
      <Link
        to="/"
        onMouseEnter={() => {
          handleHover();
        }}
        onMouseLeave={() => {
          handleHover();
        }}
      >
        <Logo src="./images/Logo.png" alt="Sweet Bundle" isMobile={isMobile} />
      </Link>
      {isMobile && (
        <>
          <MobileMenu onClick={menuHandler}>
            <MenuIcon style={{ fontSize: "30px" }} />
          </MobileMenu>
          <Drawer anchor="top" open={open} onClose={menuHandler}>
            <Link to="/about" onClick={menuHandler}>
              <ButtonLink name={"About"} />
            </Link>
            <Link to="/menu" onClick={menuHandler}>
              <ButtonLink name={"Menu"} />
            </Link>

            <Link to="/order" onClick={menuHandler}>
              <ButtonLink name={"Order"} />
            </Link>

            <Link to="/faq" onClick={menuHandler}>
              <ButtonLink name={"FAQ"} />
            </Link>
          </Drawer>
        </>
      )}
      {!isMobile && (
        <Cont>
          <Link to="/about">
            <ButtonLink name={"About"} />
          </Link>
          <Link to="/menu">
            <ButtonLink name={"Menu"} />
          </Link>

          <Link to="/order">
            <ButtonLink name={"Order"} />
          </Link>

          <Link to="/faq">
            <ButtonLink name={"FAQ"} />
          </Link>
        </Cont>
      )}
    </NavCont>
  );
};

export default Navbar;
