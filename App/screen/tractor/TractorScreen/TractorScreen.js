import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

// Importing Components
import TractorCard from "../../../components/UI/TractorCard/TractorCard";

// Import data
import tractorData from "../../../data/tractorRequest";

const TractorScreen = (props) => {
  return (
    <ScrollView style={styles.tractorScreen}>
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
