import React from "react";
import { StyleSheet, Text, View } from "react-native";

// IMPORTING Icons
import { FontAwesome } from "@expo/vector-icons";

// IMPORTING Colors
import Colors from "../../../constants/Colors";

const Feedback = (props) => {
  return (
    <View style={styles.feedback}>
      <View style={styles.feedbackContentContainer}>
        <FontAwesome style={styles.icon} name="quote-left" />
        <Text style={styles.feedbackContent}>{props.feedbackContent}</Text>
        <Text style={styles.feedbackName}>~ {props.name}</Text>
        <FontAwesome style={styles.icon} name="quote-right" />
      </View>
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  feedback: {},
  feedbackName: {
    fontFamily: "open-sans",
    fontSize: 16,
    marginVertical: 5,
  },
  feedbackContentContainer: {
    // flexDirection: "row",
    // flexWrap: "wrap",
  },
  icon: {
    fontSize: 24,
    marginVertical: 2,
    color: Colors.primary,
  },
  feedbackContent: {
    textAlign: "justify",
    fontFamily: "open-sans",
    color: Colors.grey,
  },
});
