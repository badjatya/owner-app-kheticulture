import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// IMPORTING SvhXml for using svg
import { SvgXml } from "react-native-svg";
import WelcomeSVG from "../../../../assets/images/Auth/welcome";

// Importing Colors
import Colors from "../../../../constants/Colors";

// Importing Components
import CustomButton from "../../../../components/UI/CustomButton/CustomButton";
import CustomButtonFull from "../../../../components/UI/CustomButtonFull/CustomButtonFull";

const Welcome = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeMessage}>
        Welcome to <Text style={styles.kheticulture}>Kheticulture</Text>
      </Text>
      <Text style={styles.explore}>Explore us</Text>
      <View style={styles.bookingImageContainer}>
        <SvgXml xml={WelcomeSVG} width="100%" height="400" />
      </View>

      <View style={styles.button}>
        <CustomButton
          title="Login"
          onPress={() => props.navigation.push("Login")}
        />
      </View>

      <View style={styles.fullButton}>
        <CustomButtonFull
          title="Signup"
          onPress={() => props.navigation.push("Signup")}
        />
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

  welcomeMessage: {
    textAlign: "center",
    marginTop: 70,
    fontSize: 20,
    fontFamily: "open-sans",
    color: Colors.grey,
  },
  kheticulture: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    color: Colors.grey,
  },
  explore: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
    fontFamily: "open-sans",
    color: Colors.grey,
    marginBottom: 20,
  },
  button: {
    marginTop: 50,
  },
  fullButton: {
    marginTop: 20,
  },
});
