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

const items = [
  {
    name: "Classic Berry",
    sub: "Fresh strawberries dipped in tempered chocolate",
    image: images[2].src,
    pricing: [
      "6 Strawberries - $12",
      "9 Strawberries - $16",
      "12 Strawberries - $20",
      "15 Strawberries - $25",
      "18 Strawberries - $30",
    ],
    options: [
      "Milk Chocolate",
      "White Chocolate",
      "Dark Chocolate",
      "Classic Cream Cheese Filled Strawberry",
    ],
    toppings: ["Oreo", "Skor", "Coconut"],
    notes: [
      "*Toppings are $0.50 per strawberry",
      "*Larger quantities available on request",
    ],
  },
  {
    name: "Cake in a Cup",
    sub: "Everything tastes better in a cup, so try ours ",
    image: images[5].src,
    pricing: ["Pick up only - $7"],
    options: ["Oreo Cheesecake", "Strawberry Cheesecake"],
    toppings: [],
    notes: ["*Pick up only or purchase an add-on item to your order"],
  },
  {
    name: "Bundle Bouquet",
    sub: "Chocolate Covered Strawberry Arrangement",
    image: images[6].src,
    pricing: [
      "Mini Bundle (9 Strawberries and colour of choice) - $18",
      "Full Bundle (12 Strawberries and colour of choice) - $24",
    ],
    options: [],
    toppings: [],
    notes: [
      "*Customize it by adding Lettering, Cakepops or Special Design/Décor",
      "*Price includes choice of colour and simple design",
    ],
  },
  {
    name: "Cake Pops",
    sub: "Comes in Vanilla, Chocolate, Oreo or Birthday Cake",
    image: images[4].src,
    pricing: ["1/2 Dozen - $10", "1 Dozen - $18"],
    options: ["Chocolate", "Vanilla", "Birthday Cake"],
    toppings: [],
    notes: [
      "*One flavour per 1/2 dozen cake pops",
      "*Price includes choice of colour and white sprinkle",
    ],
  },
  {
    name: "Bundle Up",
    sub: "Create your own bundle",
    image: images[8].src,
    pricing: ["12 Items - $24", "18 Items - $34"],
    options: [
      "Milk Chocolate",
      "White Chocolate",
      "Dark Chocolate",
      "Classic Cream Cheese Filled Strawberry",
    ],
    toppings: ["Oreo", "Skor", "Coconut"],
    notes: [
      "*Toppings are $0.50 per strawberry",
      "*Larger quantities available on request",
    ],
  },
  {
    name: "Cupcakes",
    sub: "Everything tastes better in a cup, so try ours",
    image: images[5].src,
    pricing: ["1/2 Dozen - $16", "1 Dozen - $26"],
    options: ["Chocolate", "Vanilla", "Birthday Cake", "Red Velvet"],
    toppings: ["Chocolate", "Vanilla", "Strawberry", "Cream Cheese"],
    notes: ["*One flavour per 1/2 dozen cupcakes"],
  },
];

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
            {items.map((item, key) => {
              return <MenuItem item={item} key={key} />;
            })}
          </CardsContainer>
        </HorizontalScroll>
      </HorizontalSection>
      <Panels />
    </>
  );
};

export default Menu;
