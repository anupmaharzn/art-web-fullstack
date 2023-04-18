import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../Button/Button";
import "./carousel.scss";
const Carousel = ({ product }) => {
  const settings = {
    dots: true,
    lazyload: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        <Slider {...settings} className="slider">
          {product.map((el) => {
            return (
              <div key={el.id} className="carousel-item">
                <div className="carousel-left">
                  <img
                    className="carousel-img"
                    src={el.image}
                    alt="bannerimg"
                  />
                </div>
                <div className="carousel-right">
                  <h3 className="carousel-title">{el.title}</h3>
                  <p className="carousel-desc">{el.description}</p>
                  <Button theme="button">EXPLORE</Button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
