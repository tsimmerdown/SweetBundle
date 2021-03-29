import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import waveBackground from "./waveBackground.svg";

// import ImageList from "./ImageList";
// import Viewer from "./Viewer";
// import ViewerItem from "./ViewerItem";

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

const Thumbnail = styled.img`
  height: 100px;
  background: transparent;
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
  };

  return (
    <div style={{ height: "75vh", width: "100%", position: "relative" }}>
      <Wave src={waveBackground} />
      <Cont>
        <Carousel
          slidesPerPage={3}
          addArrowClickHandler
          arrows
          clickToChange
          stopAutoPlayOnHover
          centered
          value={value}
          onChange={changeHandler}
        >
          {images.map((image, key) => {
            return (
              <Image
                alt="temp"
                src={image.src}
                key={image.id}
                active={image.id === value}
              />
            );
          })}
          {/* <Image alt="temp" src="./images/IMG_3619.jpg" />
          <Image alt="temp" src="./images/IMG_3619.jpg" />
          <Image alt="temp" src="./images/IMG_3619.jpg" />
          <Image alt="temp" src="./images/IMG_3619.jpg" /> */}
          {/* <ViewerItem /> */}
        </Carousel>
        <Dots
          style={{ background: "transparent" }}
          value={value}
          onChange={changeHandler}
          thumbnails={
            [
              // <Thumbnail
              //   key={1}
              //   className="img-example-small"
              //   src={"./images/IMG_3619.jpg"}
              // />,
              // <Thumbnail
              //   key={12}
              //   className="img-example-small"
              //   src={"./images/IMG_3619.jpg"}
              // />,
              // <Thumbnail
              //   key={12}
              //   className="img-example-small"
              //   src={"./images/IMG_3619.jpg"}
              // />,
              // <Thumbnail
              //   key={12}
              //   className="img-example-small"
              //   src={"./images/IMG_3619.jpg"}
              // />,
            ]
          }
        />
        {/* <Viewer />
      <ImageList /> */}
      </Cont>
    </div>
  );
};

export default ImageCarousel;
