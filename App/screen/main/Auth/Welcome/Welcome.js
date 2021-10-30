import React from "react";
import { StyleSheet, Text, View } from "react-native";

// IMPORTING SvhXml for using svg
import { SvgXml } from "react-native-svg";
import WelcomeSVG from "../../../../assets/images/Auth/welcome";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bookingImageContainer}>
        <SvgXml xml={WelcomeSVG} width="100%" height="400" />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  bookingImageContainer: {
    alignItems: "center",
  },
});
