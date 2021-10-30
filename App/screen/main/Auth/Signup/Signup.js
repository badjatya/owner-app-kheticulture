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
import SignupSVG from "../../../../assets/images/Auth/signup";

const Signup = (props) => {
  // State
  const [aadharCard, setAadharCard] = useState("");
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const loginHandler = () => {
    if (!name) {
      setErrorMessage("Enter your full name");
      return;
    }

    if (aadharCard.length < 12) {
      setErrorMessage("Aadhar no. must be of 12 digits");
      return;
    }

    if (mobileNumber.length < 10) {
      setErrorMessage("Mobile no. must be of 10 digits");
      return;
    }

    if (!password) {
      setErrorMessage("Enter password");
      return;
    }
    setErrorMessage("");
    setName("");
    setAadharCard("");
    setMobileNumber("");
    setPassword("");
    props.navigation.push("BottomTabNavigatorScreen");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.bookingImageContainer}>
        <SvgXml xml={SignupSVG} width="100%" height="200" />
      </View>

      <View style={styles.credentials}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            value={name}
            placeholder="Enter..."
            style={styles.input}
            keyboardType="name-phone-pad"
            onChangeText={(text) => setName(text)}
          />
          {errorMessage === "Enter your full name" ? (
            <Text style={styles.error}>{errorMessage}</Text>
          ) : null}
        </View>

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
          <Text style={styles.label}>Mobile No.</Text>
          <TextInput
            value={mobileNumber}
            placeholder="Enter..."
            style={styles.input}
            keyboardType="number-pad"
            onChangeText={(text) => setMobileNumber(text)}
          />
          {errorMessage === "Mobile no. must be of 10 digits" ? (
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
        <CustomButtonFull title="Signup" onPress={loginHandler} />
      </View>

      <TouchableOpacity onPress={() => props.navigation.push("Login")}>
        <Text style={styles.signup}>Already have an account? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Signup;

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
    marginBottom: 10,
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
