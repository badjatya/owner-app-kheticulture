import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// Importing Components
import CustomButton from "../../../components/UI/CustomButton/CustomButton";
import CustomButtonFull from "../../../components/UI/CustomButtonFull/CustomButtonFull";

const TractorRequest = (props) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: "https://images.pexels.com/photos/3793/agriculture-tractor.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        }}
      />

      <View style={styles.bookingDetails}>
        <Text style={styles.heading}>Booking Details</Text>
        <Text style={styles.detail}>Booking date: 24 Nov, 2021</Text>
        <Text style={styles.detail}>Farmer: Raj Jain</Text>
        <Text style={styles.detail}>Location: Indore</Text>
        <Text style={styles.detail}>Contact: 1231231234</Text>
        <Text style={styles.detail}>Work: Seeding</Text>
        <Text style={styles.detail}>Payment: Online</Text>
        <Text style={styles.detail}>Payment Method: Debit Card</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <CustomButton
            title="Accept"
            onPress={() => props.navigation.push("Shipment")}
          />
        </View>

        <View style={styles.buttonFull}>
          <CustomButtonFull
            title="Reject"
            onPress={() => props.navigation.push("Tractors")}
          />
        </View>
      </View>
    </View>
  );
};

export default TractorRequest;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  bookingDetails: {
    padding: 20,
  },
  heading: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    marginBottom: 10,
  },
  detail: {
    fontFamily: "open-sans",
    marginBottom: 5,
  },
  button: {
    marginTop: -20,
  },
  buttonFull: {
    marginTop: 20,
  },
  buttonContainer: {
    padding: 20,
  },
});
