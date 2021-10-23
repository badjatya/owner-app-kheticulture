import React, { useState, useRef } from "react";
import { View, Animated, Image, Dimensions } from "react-native";

// IMPORTING Custom hooks
import useInterval from "../../../hooks/useInterval.hook";

// IMPORTING styles
import styles from "./style";

// Using Dimensions
const MAX_WIDTH = Dimensions.get("screen").width;

// NOTE Carousel Component Function
const CarouselItem = ({ images }) => {
  const animation = useRef(new Animated.Value(0));

  const [currentImage, setCurrentImage] = useState(0);

  // Setting Interval Time
  useInterval(() => handleAnimation(), 2000);

  const handleAnimation = () => {
    let newCurrentImage = currentImage + 1;

    if (newCurrentImage >= images.length) {
      newCurrentImage = 0;
    }

    Animated.spring(animation.current, {
      toValue: -(MAX_WIDTH * newCurrentImage),
      useNativeDriver: true,
    }).start();

    setCurrentImage(newCurrentImage);
  };

  return (
    <View style={styles.carouselItem}>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateX: animation.current }],
          },
        ]}
      >
        {images.map((image) => (
          <Image
            style={styles.image}
            key={image}
            resizeMode="cover"
            source={{ uri: image }}
          />
        ))}
      </Animated.View>
      <View style={styles.indicatorContainer}>
        {images.map((image, index) => (
          <View
            key={`${image}_${index}`}
            style={[
              styles.indicator,
              index === currentImage ? styles.activeIndicator : undefined,
            ]}
          ></View>
        ))}
      </View>
    </View>
  );
};

export default CarouselItem;
