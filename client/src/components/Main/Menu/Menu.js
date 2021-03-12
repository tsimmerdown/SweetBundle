import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import MenuItem from "./MenuItem";
import HorizontalScroll from "./HorizontalScroll";
import Panels from "../../Panels/Panels";

const HorizontalSection = styled(motion.section)`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 0 0 150px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const images = [
  { id: 1, src: "./images/IMG_3619.jpg" },
  { id: 2, src: "./images/IMG_3687.jpg" },
  { id: 3, src: "./images/IMG_3805.jpg" },
  { id: 4, src: "./images/IMG_3929.jpg" },
  { id: 5, src: "./images/IMG_3986.jpg" },
  { id: 6, src: "./images/IMG_4058.jpg" },
  { id: 7, src: "./images/IMG_4078.jpg" },
  { id: 8, src: "./images/IMG_4115.jpg" },
  { id: 9, src: "./images/IMG_4153.jpg" },
];

const containerVariants = {
  initial: {
    visibility: "hidden",
    opacity: 0,
    transition: {
      delay: 1,
    },
  },
  animate: {
    visibility: "visible",
    opacity: 1,

    transition: {
      delay: 1,
    },
  },
  exit: {
    visibility: "visible",
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const Menu = () => {
  return (
    <>
      <HorizontalSection
        id="menu"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <HorizontalScroll>
          <CardsContainer>
            <MenuItem
              name={"Classic Berry"}
              sub={"Your choice of White, Milk, Dark or Mix Choco Berry"}
              image={images[2].src}
            />
            <MenuItem
              name={"Cheesecake Berry"}
              sub={
                "Cheesecake filled strawberry ( Classic, Oreo or Chocolate )"
              }
              image={images[1].src}
            />
            <MenuItem
              name={"Variety Bundle"}
              sub={"A mixture of Chocolate and Cheesecake berries"}
              image={images[1].src}
            />
            <MenuItem
              name={"Bundle Bouquet"}
              sub={"Chocolate Strawberry Arrangement"}
              image={images[6].src}
            />
            <MenuItem
              name={"Cake Pops"}
              sub={"Comes in Vanilla, Chocolate, Oreo or Birthday Cake"}
              image={images[4].src}
            />
            <MenuItem
              name={"Bundle Up"}
              sub={
                "CYO: cake pops, chocolate strawberries, cheesecake filled strawberries"
              }
              image={images[8].src}
            />
            <MenuItem name={"Cupcakes"} sub={""} image={images[5].src} />
          </CardsContainer>
        </HorizontalScroll>
      </HorizontalSection>
      <Panels />
    </>
  );
};

export default Menu;
