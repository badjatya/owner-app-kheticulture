import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// Importing Colors
import Colors from "../../../constants/Colors";

// Importing Components
import CustomButton from "../CustomButton/CustomButton";

const TractorCard = (props) => {
  const { tractorData } = props;
  return (
    <View style={styles.tractorCard}>
      <View style={styles.tractorHeadingContainer}>
        <Text style={styles.heading}>{tractorData.tractorName}</Text>
        <Text
          style={{
            fontFamily: "open-sans",
            fontSize: 13,
            color: tractorData.status === "Cancelled" ? "red" : Colors.primary,
          }}
        >
          {tractorData.status}
        </Text>
      </View>

      <View style={styles.detailContainer}>
        <Image
          style={styles.image}
          source={{
            uri: tractorData.image,
          }}
        />

        <View style={styles.details}>
          <Text style={styles.detail}>
            Booking date: {tractorData.bookingDate}
          </Text>
          <Text style={styles.detail}>Farmer: {tractorData.farmerName}</Text>
          <Text style={styles.detail}>Location: {tractorData.location}</Text>
          <Text style={styles.detail}>Contact: {tractorData.contact}</Text>
        </View>
      </View>

      <View style={styles.button}>
        {tractorData.status === "Accepted" ? (
          <CustomButton title="Schedule" onPress={props.onSchedule} />
        ) : tractorData.status === "Scheduled" ? (
          <CustomButton title="Start Job" onPress={props.onStartJob} />
        ) : tractorData.status === "In Transit" ? (
          <CustomButton title="Reached" onPress={props.onReached} />
        ) : tractorData.status === "Reached" ? (
          <CustomButton title="Create Job" onPress={props.onCreateJob} />
        ) : tractorData.status === "Job In Progress" ? (
          <CustomButton title="Ongoing Job" onPress={props.onGoingJob} />
        ) : (
          <CustomButton title="View" onPress={props.onClick} />
        )}
      </View>
    </View>
  );
};

export default TractorCard;

const styles = StyleSheet.create({
  tractorCard: {
    padding: 20,
    backgroundColor: Colors.white,
    marginBottom: 20,
  },
  tractorHeadingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  image: {
    height: 90,
    width: "35%",
  },
  details: {
    width: "60%",
  },
  detail: {
    fontFamily: "open-sans",
  },
  button: {
    marginTop: 15,
  },
});
