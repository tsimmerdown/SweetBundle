import React, { useState } from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import ItemModal from "./MenuModal";
import { motion } from "framer-motion";
import { deviceSize } from "../../responsive";

const MenuItemCont = styled.div`
  width: 25vw;

  .name {
    font-weight: 500;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 80vw;
    margin: 2vh 0;
  }
`;

const Content = styled(motion.div)`
  display: flex;
  height: 35vh;
  width: 20vw;
  overflow: hidden;
  border-radius: 10px;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 100%;
  }
`;

const Image = styled(motion.img)`
  border-radius: 10px;
  height: 100%;
  width: 100%;
`;

const MenuItem = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <MenuItemCont>
      <Typography variant="h5" className="name">
        {props.item.name}
      </Typography>
      <Typography variant="subtitle1">{props.item.sub}</Typography>
      <Content
        whileTap={{
          scale: 0.9,
        }}
      >
        <Image
          src={props.item.image}
          onClick={handleOpen}
          whileHover={{
            scale: 1.05,
          }}
        />
      </Content>
      <ItemModal open={open} setOpen={setOpen} {...props.item} />
    </MenuItemCont>
  );
};

export default MenuItem;
