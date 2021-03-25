import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ViewerItem from "./ViewerItem";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { IconButton } from "@material-ui/core";
import { motion } from "framer-motion";

const Cont = styled.div`
  width: 100%;
  height: 80%;
  // background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled(motion(IconButton))`
  &&:hover {
    background-color: transparent;
  }
`;

const images = [
  {
    img: 0,
    id: 0,
  },
  {
    img: 1,
    id: 1,
  },
  {
    img: 2,
    id: 2,
  },
  {
    img: 3,
    id: 3,
  },
  {
    img: 4,
    id: 4,
  },
  {
    img: 5,
    id: 5,
  },
  {
    img: 6,
    id: 6,
  },
  {
    img: 7,
    id: 7,
  },
  {
    img: 8,
    id: 8,
  },
  {
    img: 9,
    id: 9,
  },
];

const buttonVariant = {
  initial: {},
  animate: {},
  exit: {},
};

const Viewer = () => {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(0);

  const generateItems = () => {
    const itemList = [];
    for (var i = active - 2; i < active + 3; i++) {
      var index = i;
      if (i < 0) {
        index = images.length + i;
      } else if (i >= images.length) {
        index = i % images.length;
      }
      let img = images[index].img;
      let id = images[index].id;
      itemList.push(
        <ViewerItem
          img={img}
          active={id === active}
          onClick={() => setActive(id)}
        />
      );
    }
    return itemList;
    // setItems(itemList);
  };

  const moveLeft = () => {
    var newActive = active;
    setActive(--newActive < 0 ? images.length - 1 : newActive);
  };

  const moveRight = () => {
    var newActive = active;
    setActive(++newActive > images.length - 1 ? 0 : newActive);
  };

  useEffect(() => {
    generateItems();
  }, [active]);

  return (
    <Cont>
      <Arrow
        onClick={moveLeft}
        whileHover={{
          scale: 1.5,
        }}
        disableRipple
      >
        <ArrowBackIosIcon />
      </Arrow>
      {/* {items &&
        items.map((item, key) => {
          return (
            <ViewerItem img={item.img} key={key} active={item.id === active} />
          );
        })} */}
      {generateItems()}
      <Arrow
        onClick={moveRight}
        whileHover={{
          scale: 1.5,
        }}
        disableRipple
      >
        <ArrowForwardIosIcon />
      </Arrow>
    </Cont>
  );
};

export default Viewer;
