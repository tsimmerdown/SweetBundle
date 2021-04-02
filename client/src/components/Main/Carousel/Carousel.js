import React, { useState } from "react";
import styled from "styled-components";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import waveBackground from "./waveBackground.svg";

const images = [
  { id: 0, src: "./images/IMG_3619.jpg" },
  { id: 1, src: "./images/IMG_3687.jpg" },
  { id: 2, src: "./images/IMG_3805.jpg" },
  { id: 3, src: "./images/IMG_3929.jpg" },
  { id: 4, src: "./images/IMG_3986.jpg" },
  { id: 5, src: "./images/IMG_4058.jpg" },
  { id: 6, src: "./images/IMG_4078.jpg" },
  { id: 7, src: "./images/IMG_4115.jpg" },
  { id: 8, src: "./images/IMG_4153.jpg" },
];

const Cont = styled.div`
  height: 75vh;
  margin: auto;
  width: 80vw;
  button {
    background: transparent;
  }
  position: relative;
`;

const Image = styled.img`
  height: ${(props) => (props.active ? "35rem" : "30rem")};
  opacity: ${(props) => (props.active ? 1 : 0.6)};
`;

const Wave = styled.img`
  display: block;
  position: absolute;
  bottom: 0px;
`;

const ImageCarousel = () => {
  const [value, setValue] = useState(1);

  const changeHandler = (value) => {
    setValue(value);
    console.log(value);
  };

  const activeHandler = (id) => {
    let currId = 0;
    if (value < 0) {
      currId = (value % images.length) + images.length;
      if (id === currId) {
        return true;
      }
    }

    if (id === value % images.length) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div style={{ height: "75vh", width: "100%", position: "relative" }}>
      <Wave src={waveBackground} />
      <Cont>
        <Carousel
          slidesPerPage={3}
          arrows
          infinite
          addArrowClickHandler
          clickToChange
          stopAutoPlayOnHover
          centered
          autoPlay={10000}
          animationSpeed={800}
          value={value}
          onChange={changeHandler}
        >
          {images.map((image, key) => {
            return (
              <Image
                alt="temp"
                src={image.src}
                key={image.id}
                active={activeHandler(image.id)}
              />
            );
          })}
        </Carousel>
        <Dots
          style={{ background: "transparent" }}
          value={value}
          onChange={changeHandler}
        />
      </Cont>
    </div>
  );
};

export default ImageCarousel;
