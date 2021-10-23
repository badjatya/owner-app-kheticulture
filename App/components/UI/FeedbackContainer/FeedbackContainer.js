import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// IMPORTING Components
import CustomButton from "../CustomButton/CustomButton";
import Feedback from "../Feedback/Feedback";

const FeedbackContainer = (props) => {
  const [moreFeedback, setMoreFeedback] = useState(false);
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: props.background,
        marginBottom: 20,
      }}
    >
      <View style={styles.allFeedbacks}>
        <Feedback
          name="Aastha Mahindra"
          feedbackContent="Man place. Fish made seed days, said rule. Moving hath him seasons shall dominion whose male them moving beginning dry seas behold place set years fifth for you're darkness two female whose. Forth his let in. Replenish his winged. Their together."
        />

        {/* if moreFeedback is set to true than it is visible else not  */}
        {moreFeedback && (
          <View style={styles.hiddenFeedback}>
            <View style={styles.feedbackSeparator} />
            <Feedback
              name="Archit Badjatya"
              feedbackContent="Abundantly give fruit signs days dominion have. Winged be were said upon were. You. Over likeness over moved month kind wherein that one appear our likeness after. Fruitful give subdue."
            />

            <View style={styles.feedbackSeparator} />
            <Feedback
              name="Nandini Chhajed"
              feedbackContent="Herb called land without grass have unto god to dry fourth from. Were saw void from of bring be tree cattle all she'd fill so beast made together be rule."
            />
          </View>
        )}
      </View>
      <View style={styles.customButtonContainer}>
        <CustomButton
          title={moreFeedback ? "Hide" : "More"}
          onPress={() => setMoreFeedback((initialValue) => !initialValue)}
        />
      </View>
    </View>
  );
};

export default FeedbackContainer;

const styles = StyleSheet.create({
  allFeedbacks: {},
  hiddenFeedback: {
    marginVertical: 5,
  },
  feedbackSeparator: {
    marginVertical: 9,
  },
  customButtonContainer: {
    marginTop: 10,
  },
});
