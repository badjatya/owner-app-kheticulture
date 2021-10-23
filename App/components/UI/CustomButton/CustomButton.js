import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// IMPORTING Importing Colors
import Colors from "../../../constants/Colors";

const CustomButton = ({ onPress, title }) => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.button}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderColor: Colors.primary,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    fontFamily: "open-sans-bold",
    color: Colors.primary,
    textAlign: "center",
  },
});
