import React from "react";
import { StyleSheet, Text, View } from "react-native";

// IMPORTING Components
import CustomVideoComponent from "../CustomVideoComponent/CustomVideoComponent";

const VideoContainer = () => {
  return (
    <View style={styles.videoContainer}>
      <View style={styles.row}>
        <CustomVideoComponent videoSource="http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" />
        <CustomVideoComponent videoSource="http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" />
        <CustomVideoComponent videoSource="http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" />
        <CustomVideoComponent videoSource="http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" />
      </View>
    </View>
  );
};

export default VideoContainer;

const styles = StyleSheet.create({
  videoContainer: {
    padding: 20,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});
