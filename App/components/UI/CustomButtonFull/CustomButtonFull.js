import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// IMPORTING Importing Colors
import Colors from "../../../constants/Colors";

const CustomButtonFull = ({ onPress, title }) => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.button}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButtonFull;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    fontFamily: "open-sans-bold",
    color: Colors.white,
    textAlign: "center",
  },
});
