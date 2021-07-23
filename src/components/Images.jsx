import React from 'react'
import Carousel from 'react-multi-carousel';
import { responsive } from '../utils';

const images = [
  require('../images/1.jpg'),
  require('../images/2.jpg'),
  require('../images/3.jpg'),
  require('../images/1.jpg'),
]

export default function Images() {
  return (
    <Carousel
      ssr
      containerClass="carousel-container"
      itemClass="carousel-item"
      partialVisbile
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
