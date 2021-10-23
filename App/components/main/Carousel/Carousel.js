import React from "react";

import CarouselItem from "../../UI/CarouselItem/CarouselItem";

// Images
const images = [
  "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/4207908/pexels-photo-4207908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/4421377/pexels-photo-4421377.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

const Carousel = () => {
  return <CarouselItem images={images} />;
};

export default Carousel;
