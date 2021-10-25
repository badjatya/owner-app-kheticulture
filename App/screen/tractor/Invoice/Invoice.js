import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

// Importing Colors
import Colors from "../../../constants/Colors";

import CustomButton from "../../../components/UI/CustomButton/CustomButton";

const Invoice = (props) => {
  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{
          uri: "https://images.pexels.com/photos/3793/agriculture-tractor.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        }}
      />

      <View style={styles.shippingDetails}>
        <Text style={styles.heading}>Invoice</Text>

        <Text style={styles.detail}>Owner: Archit Badjatya</Text>
        <Text style={styles.detail}>Owner contact: 1231231230</Text>
        <Text style={styles.detail}>Driver: Ram Jain</Text>
        <Text style={styles.detail}>Driver contact: 1231231230</Text>
        <Text style={styles.detail}>Tractor type: Utility tractor</Text>
        <Text style={styles.detail}>Location: Indore</Text>
        <Text style={styles.detail}>Time consumption: 8 hrs</Text>
        <Text style={styles.detail}>Fuel consumption: 10 litre</Text>

        <View style={styles.border} />
        <View style={styles.totalContainer}>
          <Text style={styles.total}>Total:</Text>
          <Text style={styles.detail}>₹ 10,000</Text>
        </View>

        <CustomButton
          title="Home"
          onPress={() => props.navigation.push("Tractors")}
        />
      </View>
    </ScrollView>
  );
};

export default Invoice;

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
  detail: {
    fontFamily: "open-sans",
    marginBottom: 5,
  },
  border: {
    borderWidth: 1,
    borderColor: Colors.primary,
    marginTop: 10,
    marginBottom: 10,
  },
  total: {
    fontFamily: "open-sans-bold",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
