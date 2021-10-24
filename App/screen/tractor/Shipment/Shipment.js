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

const Shipment = () => {
  // State
  const [driverName, setDriverName] = useState("");
  const [driverContact, setDriverContact] = useState("");

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
          placeholder="Enter Drive Name..."
        />
        <TextInput
          style={styles.input}
          value={driverContact.toString()}
          onChangeText={setDriverContact}
          placeholder="Enter Drive Contact..."
        />
        <View style={styles.button}>
          <CustomButton title="Start" />
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
});
