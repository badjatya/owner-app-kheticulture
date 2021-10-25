import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";

// Importing Components
import CustomButton from "../../../components/UI/CustomButton/CustomButton";

const Shipment = (props) => {
  // State
  const [driverName, setDriverName] = useState("");
  const [driverContact, setDriverContact] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = () => {
    if (!driverName) {
      setMessage("Please enter driver name");
      return;
    } else if (!driverContact) {
      setMessage("Please enter driver contact");
      return;
    }

    setMessage("");
    setDriverName("");
    setDriverContact("");
    props.navigation.push("Create Job");
  };

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{
          uri: "https://images.pexels.com/photos/3793/agriculture-tractor.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        }}
      />

      <View style={styles.shippingDetails}>
        <Text style={styles.heading}>Enter shipping details</Text>
        <TextInput
          style={styles.input}
          value={driverName}
          onChangeText={setDriverName}
          placeholder="Enter Driver Name..."
        />

        {/* error message  */}
        {!driverName && message === "Please enter driver name" ? (
          <Text style={styles.message}>{message}</Text>
        ) : null}

        <TextInput
          style={styles.input}
          value={driverContact.toString()}
          onChangeText={setDriverContact}
          keyboardType="number-pad"
          placeholder="Enter Driver Contact..."
        />

        {/* error message  */}
        {!driverContact && message === "Please enter driver contact" ? (
          <Text style={styles.message}>{message}</Text>
        ) : null}

        <View style={styles.button}>
          <CustomButton title="Start" onPress={submitHandler} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Shipment;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  shippingDetails: {
    padding: 20,
  },
  heading: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 15,
  },
  button: {},
  message: {
    color: "red",
    marginTop: -10,
    marginBottom: 20,
    marginLeft: 5,
  },
});
