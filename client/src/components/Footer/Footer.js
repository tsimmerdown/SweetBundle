import React from "react";
import styled from "styled-components";
import { Button, InputBase, Typography, Divider } from "@material-ui/core";

import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";

const FooterCont = styled.div`
  width: 100%;
  background: #d3a6a9;
  .emailCont {
    display: flex;
    align-items: center;
    margin: auto;
    width: 80vw;
    height: 25%;
    font-size: 14px;
    border-bottom: 1px solid black;
    padding: 5vh 0;
  }

  .textCont {
    display: flex;
    align-content: center;
    flex-grow: 1;
    margin-left: 20vw;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 10px 0;
    .emailCont {
      flex-direction: column;
    }
    .textCont {
      width: 100%;
      margin: 20px 0;
    }
  }
`;

const BottomCont = styled.div`
  width: 80vw;
  margin auto;
  display: flex;

  .icon{
    flex-grow: 2;
    padding: 3vh 0;
  }
  .pages{
    flex-grow: 1;
    margin: 0 1vw;
  }
  .contactUs{
    flex-grow: 1;
  }
`;

const Input = styled(InputBase)`
  && {
    padding: 5px;
    border-radius: 5px 0 0 5px;
  }
`;

const StyledButton = styled(Button)`
  && {
    border-radius: 0 5px 5px 0;
    background-color: #383838;
    color: white;
    :hover {
      color: black;
    }
  }
`;

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <FooterCont>
      <div className="emailCont">
        <Typography style={{ flexGrow: 0 }}>
          Be the first to hear about news, packages and offers!
        </Typography>
        <div className="textCont">
          <Input
            autoComplete="off"
            id="input"
            placeholder="Email Address..."
            style={{ flexGrow: 1, fontSize: "14px", background: "white" }}
          />
          <StyledButton variant="contained">Sign up</StyledButton>
        </div>
      </div>
      <BottomCont>
        {!isMobile && (
          <div className="icon">
            <img
              src="./images/Logo.png"
              alt="Logo"
              style={{ height: "15vh", margin: "4vh 1vw" }}
            />
          </div>
        )}
        {!isMobile && (
          <div className="pages">
            <Typography variant="h5" style={{ padding: "2vh 0" }}>
              Pages
            </Typography>
            <Divider
              orientation="horizontal"
              style={{ marginBottom: "2vh", background: "black" }}
            />
            <Link to="about" style={{ textDecoration: "none", color: "black" }}>
              <Typography variant="subtitle1" style={{ padding: "2px" }}>
                About
              </Typography>
            </Link>
            <Link to="menu" style={{ textDecoration: "none", color: "black" }}>
              <Typography variant="subtitle1" style={{ padding: "2px" }}>
                Menu
              </Typography>
            </Link>
            <Link to="order" style={{ textDecoration: "none", color: "black" }}>
              <Typography variant="subtitle1" style={{ padding: "2px" }}>
                Order
              </Typography>
            </Link>
            <Link to="faq" style={{ textDecoration: "none", color: "black" }}>
              <Typography variant="subtitle1" style={{ padding: "2px" }}>
                FAQ
              </Typography>
            </Link>
          </div>
        )}
        <div className="contactUs">
          <Typography variant="h5" style={{ padding: "2vh 0" }}>
            Contact Us
          </Typography>
          <Divider
            orientation="horizontal"
            style={{ marginBottom: "2vh", background: "black" }}
          />
          <Typography variant="subtitle1" style={{ padding: "2px" }}>
            <strong>Email: </strong>sweetbundle.ying@gmail.com
          </Typography>
          <Typography variant="subtitle1" style={{ padding: "2px" }}>
            <strong>Telephone: </strong>(123) 456 7890
          </Typography>
          <Typography variant="subtitle1" style={{ padding: "2px" }}>
            Stay informed through
            <br></br> Facebook, Instagram, and Twitter
          </Typography>
        </div>
      </BottomCont>
    </FooterCont>
  );
};

export default Footer;
