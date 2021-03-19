import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import waveBackground from "./waveBackground.svg";

// import ImageList from "./ImageList";
// import Viewer from "./Viewer";
// import ViewerItem from "./ViewerItem";

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
  height: 35rem;
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

  useEffect(() => {
    console.log(value);
  }, [value]);

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
          <Image alt="temp" src="./images/IMG_3619.jpg" />
          <Image alt="temp" src="./images/IMG_3619.jpg" />
          <Image alt="temp" src="./images/IMG_3619.jpg" />
          <Image alt="temp" src="./images/IMG_3619.jpg" />
          {/* <ViewerItem /> */}
        </Carousel>
        <Dots
          style={{ background: "transparent" }}
          value={value}
          onChange={changeHandler}
          thumbnails={[
            <Thumbnail
              key={1}
              className="img-example-small"
              src={"./images/IMG_3619.jpg"}
            />,
            <Thumbnail
              key={12}
              className="img-example-small"
              src={"./images/IMG_3619.jpg"}
            />,
            <Thumbnail
              key={12}
              className="img-example-small"
              src={"./images/IMG_3619.jpg"}
            />,
            <Thumbnail
              key={12}
              className="img-example-small"
              src={"./images/IMG_3619.jpg"}
            />,
          ]}
        />
        {/* <Viewer />
      <ImageList /> */}
      </Cont>
    </div>
  );
};

export default ImageCarousel;
