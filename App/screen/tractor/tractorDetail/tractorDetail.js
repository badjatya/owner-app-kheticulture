import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// Importing Components
import CustomButton from "../../../components/UI/CustomButton/CustomButton";
import CustomButtonFull from "../../../components/UI/CustomButtonFull/CustomButtonFull";

// Importing redux
import { useSelector, useDispatch } from "react-redux";

// Importing actions
import * as tractorActions from "../../../store/actions/tractor.action";
// dispatch(tractorActions.tractorRequestAccepted())

const TractorDetail = (props) => {
  const dispatch = useDispatch();
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
        <Text style={styles.detail}>Job Time: 5 hour</Text>
        <Text style={styles.detail}>Total Time: 7 Hour</Text>
        <Text style={styles.detail}>Price calculation: Time based</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <CustomButton
            title="Finish"
            onPress={() => {
              props.navigation.push("Tractors");
              dispatch(tractorActions.tractorRequestFinish());
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default TractorDetail;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
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
