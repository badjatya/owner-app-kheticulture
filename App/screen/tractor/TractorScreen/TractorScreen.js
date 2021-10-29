import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

// Importing Components
import TractorCard from "../../../components/UI/TractorCard/TractorCard";

// Import data
import tractorData from "../../../data/tractorRequest";

// Importing redux
import { useSelector, useDispatch } from "react-redux";

const TractorScreen = (props) => {
  // taking data
  const TRACTOR_REQUEST_DATA = useSelector(
    (state) => state.tractors.tractorRequest
  );
  return (
    <ScrollView style={styles.tractorScreen}>
      <TractorCard
        tractorData={TRACTOR_REQUEST_DATA}
        onClick={() => props.navigation.push("Tractor Request")}
      />

      {tractorData.map((tractor) => (
        <TractorCard
          tractorData={tractor}
          key={tractor.id}
          onClick={() => props.navigation.push("Tractor Request")}
        />
      ))}
    </ScrollView>
  );
};

export default TractorScreen;

const styles = StyleSheet.create({
  tractorScreen: {
    padding: 20,
    marginBottom: 5,
  },
});
