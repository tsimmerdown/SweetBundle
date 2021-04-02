import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ButtonLink from "./ButtonLink";
import { useDispatch } from "react-redux";
import { setCursor } from "../../actions/cursor";

const NavCont = styled.div`
  height: 15vh;
  padding: 0 15vw;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: transparent;
  z-index: 1000;
  a {
    text-decoration: none;
  }
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
    dispatch(setCursor());
  };

  return (
    <NavCont>
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
        <img
          src="./images/Logo.png"
          style={{ height: "125px" }}
          alt="Sweet Bundle"
        />
      </Link>
      <Link to="/order">
        <ButtonLink name={"Order"} />
      </Link>

      <Link to="/faq">
        <ButtonLink name={"FAQ"} />
      </Link>
    </NavCont>
  );
};

export default Navbar;
