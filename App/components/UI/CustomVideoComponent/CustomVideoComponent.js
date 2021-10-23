import React from "react";
import { StyleSheet, Text, View } from "react-native";

// IMPORTING Video
import { Video } from "expo-av";

const CustomVideoComponent = ({ videoSource }) => {
  return (
    <Video
      style={styles.video}
      source={{ uri: videoSource }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      shouldPlay={false}
      isLooping={false}
      useNativeControls
      resizeMode="contain"
      isLooping
    />
  );
};

export default CustomVideoComponent;

const styles = StyleSheet.create({
  video: {
    width: 170,
    height: 100,
    marginBottom: 11,
  },
});
