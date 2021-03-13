import React from "react";
import styled from "styled-components";
import {
  Button,
  InputBase,
  Typography,
  IconButton,
  Avatar,
  Divider,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const FooterCont = styled.div`
  height: 40vh;
  width: 100%;
  background: #303030;
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
`;

const BottomCont = styled.div`
  width: 80vw;
  margin auto;
  display: flex;

  .icon{
    flex-grow: 2;
    padding: 10vh 0;

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
    background-color: #990000;
  }
`;

const Footer = () => {
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
            // onChange={changeHandler}
            // onKeyPress={searchHandler}
          />
          <StyledButton variant="contained">Sign up</StyledButton>
        </div>
      </div>
      <BottomCont>
        <div className="icon">
          <Typography variant="h4">Sweet Bundle</Typography>
          <div style={{ margin: "1vh 0" }}>
            <IconButton size="small">
              <Avatar>
                <FacebookIcon />
              </Avatar>
            </IconButton>
            <IconButton size="small">
              <Avatar>
                <TwitterIcon />
              </Avatar>
            </IconButton>
            <IconButton size="small">
              <Avatar>
                <InstagramIcon />
              </Avatar>
            </IconButton>
          </div>
        </div>
        <div className="pages">
          <Typography variant="h5" style={{ padding: "2vh 0" }}>
            Pages
          </Typography>
          <Divider
            orientation="horizontal"
            style={{ marginBottom: "2vh", background: "black" }}
          />
          <Typography variant="subtitle1" style={{ padding: "2px" }}>
            About
          </Typography>
          <Typography variant="subtitle1" style={{ padding: "2px" }}>
            Menu
          </Typography>
          <Typography variant="subtitle1" style={{ padding: "2px" }}>
            Order
          </Typography>
          <Typography variant="subtitle1" style={{ padding: "2px" }}>
            FAQ
          </Typography>
        </div>
        <div className="contactUs">
          <Typography variant="h5" style={{ padding: "2vh 0" }}>
            Contact Us
          </Typography>
          <Divider
            orientation="horizontal"
            style={{ marginBottom: "2vh", background: "black" }}
          />
          <Typography variant="subtitle1" style={{ padding: "2px" }}>
            <strong>Email: </strong>helloworld@gmail.com
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
