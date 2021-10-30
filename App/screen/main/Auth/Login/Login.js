import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

// Importing Colors
import Colors from "../../../../constants/Colors";

// Importing Components
import CustomButton from "../../../../components/UI/CustomButton/CustomButton";
import CustomButtonFull from "../../../../components/UI/CustomButtonFull/CustomButtonFull";

const Login = () => {
  // State
  const [aadharCard, setAadharCard] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={{ padding: 20 }}>
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
        </View>
      </View>

      <View style={styles.button}>
        <CustomButtonFull title="Submit" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  credentials: {
    marginTop: -20,
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
});
