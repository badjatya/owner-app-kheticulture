import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

// Importing React native paper
import { RadioButton } from "react-native-paper";

// Importing Components
import CustomButton from "../../../components/UI/CustomButton/CustomButton";
import CustomButtonFull from "../../../components/UI/CustomButtonFull/CustomButtonFull";

// Importing Colors
import Colors from "../../../constants/Colors";

const CreateJob = (props) => {
  const [checked, setChecked] = useState("first");
  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{
          uri: "https://images.pexels.com/photos/3793/agriculture-tractor.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        }}
      />

      <View style={styles.shippingDetails}>
        <Text style={styles.heading}>Price Calculation by</Text>
        <View>
          <View style={styles.radioButton}>
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
              color={Colors.primary}
            />
            <Text style={styles.radioText}>Fuel Based</Text>
          </View>

          <View style={styles.radioButton}>
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
              color={Colors.primary}
            />
            <Text style={styles.radioText}>Time Based</Text>
          </View>
        </View>

        <View style={styles.button}>
          <CustomButton title="Start" />
        </View>

        <View style={styles.button}>
          <CustomButtonFull
            title="Finish"
            onPress={() => props.navigation.push("Invoice")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateJob;

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
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  radioText: {
    fontFamily: "open-sans",
    fontSize: 16,
    marginLeft: 10,
  },
  button: {
    marginBottom: 20,
  },
});
