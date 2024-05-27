import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/slick.css'


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true
  };
  return (
    <div className="slider">
    <Slider {...settings}>
      <div>
        <img alt="" src="https://m.media-amazon.com/images/I/71yRZC+gRbL._SX3000_.jpg"></img>
      </div>
      <div>
        <img alt="" src="https://m.media-amazon.com/images/I/61QP00oAExL._SX3000_.jpg"></img>
      </div>
      <div>
        <img alt="" src="https://m.media-amazon.com/images/I/51qBj3502YL._SX3000_.jpg"></img>
      </div>
      <div>
        <img alt="" src="https://m.media-amazon.com/images/I/61QuivkXE7L._SX3000_.jpg"></img>
      </div>
      <div>
        <img alt="" src="https://m.media-amazon.com/images/I/71YtV9RqMHL._SX3000_.jpg"></img>
      </div>

    </Slider>
    </div>
  );
}