import React from "react";
import Slider from "react-slick";
function SliderP() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2>Fade</h2>
      <Slider {...settings}>
        <div>
          <img src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg" />
        </div>
        <div>
          <img src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg" />
        </div>
        <div>
          <img src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg" />
        </div>
        <div>
          <img src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg" />
        </div>
      </Slider>
    </div>
  );
}

export default SliderP;
