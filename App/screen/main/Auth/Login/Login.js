import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

// Importing Colors
import Colors from "../../../../constants/Colors";

// Importing Components
import CustomButton from "../../../../components/UI/CustomButton/CustomButton";
import CustomButtonFull from "../../../../components/UI/CustomButtonFull/CustomButtonFull";

// IMPORTING SvhXml for using svg
import { SvgXml } from "react-native-svg";
import LoginSVG from "../../../../assets/images/Auth/login";

const Login = (props) => {
  // State
  const [aadharCard, setAadharCard] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const loginHandler = () => {
    if (aadharCard.length < 12) {
      setErrorMessage("Aadhar no. must be of 12 digits");
      return;
    }
    if (!password) {
      setErrorMessage("Enter password");
      return;
    }
    setErrorMessage("");
    setAadharCard("");
    setPassword("");
    props.navigation.push("BottomTabNavigatorScreen");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.bookingImageContainer}>
        <SvgXml xml={LoginSVG} width="100%" height="400" />
      </View>
      <View style={styles.credentials}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Aadhar Card No.</Text>
          <TextInput
            value={aadharCard}
            placeholder="Enter..."
            style={styles.input}
            keyboardType="number-pad"
            onChangeText={(text) => setAadharCard(text)}
          />
          {errorMessage === "Aadhar no. must be of 12 digits" ? (
            <Text style={styles.error}>{errorMessage}</Text>
          ) : null}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            value={password}
            placeholder="Enter..."
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          {errorMessage === "Enter password" ? (
            <Text style={styles.error}>{errorMessage}</Text>
          ) : null}
        </View>
      </View>

      <View style={styles.button}>
        <CustomButtonFull title="Login" onPress={loginHandler} />
      </View>

      <TouchableOpacity onPress={() => props.navigation.push("Signup")}>
        <Text style={styles.signup}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  credentials: {
    marginTop: -40,
  },
  inputContainer: {
    marginTop: 40,
  },
  label: {
    fontFamily: "open-sans",
  },
  input: {
    padding: 3,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
  },
  button: {
    marginTop: 40,
  },
  bookingImageContainer: {
    alignItems: "center",
  },
  signup: {
    fontFamily: "open-sans",
    fontSize: 12,
    marginTop: 20,
    textAlign: "center",
    color: Colors.grey,
  },
  error: {
    fontSize: 12,
    fontFamily: "open-sans",
    color: "red",
  },
});
