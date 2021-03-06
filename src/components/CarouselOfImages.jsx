import React from 'react';
import Carousel from 'react-multi-carousel';
import { useSelector } from 'react-redux';
import { responsive } from '../utils';
import './CarouselOfImages.scss';

export default function CarouselOfImages() {
  const images = useSelector((state) => state.images);

  return (
    <Carousel
      containerClass="carousel-container"
      itemClass="carousel-item"
      direction="horizontal"
      itemClass="image-item"
      responsive={responsive}
    >
      {images.slice(0, 5).map((image, index) => {
        return (
          <img
            draggable={false}
            style={{ width: "100%", height: "100%" }}
            src={image}
            key={index}
          />
        );
      })}
    </Carousel>
  )
}
