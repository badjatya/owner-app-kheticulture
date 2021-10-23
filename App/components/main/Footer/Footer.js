import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// IMPORTING Icons
import { MaterialIcons } from "@expo/vector-icons";

// IMPORTING Colors
import Colors from "../../../constants/Colors";
import CustomButton from "../../UI/CustomButton/CustomButton";

const Footer = () => {
  return (
    <View style={styles.Footer}>
      {/* Support Card START */}
      <View style={styles.support}>
        <View style={styles.supportIconContainer}>
          <MaterialIcons
            name="support-agent"
            style={styles.supportIcon}
            color={Colors.primary}
          />
        </View>
        <View style={styles.supportDescriptionContainer}>
          <Text style={styles.supportDescriptionTitle}>
            Product and Account Support
          </Text>
          <Text style={styles.supportDescription}>
            Our help center is fresh and we are available 24x7 to assist you.
            Whatever questions you have, if you cant find the answer you are
            looking for, we are here to lend a hand.
          </Text>
          <View style={styles.supportCustomButtonContainer}>
            <CustomButton title="Contact" onPress={() => alert("Contacted")} />
          </View>
        </View>
      </View>
      {/* Support Card END */}

      {/* Partners Card START */}
      <View style={styles.partnersCard}>
        <View style={styles.partners}>
          <Text style={styles.partnersTitle}>
            Proud Partners with Govt. of India
          </Text>

          {/* <View style={styles.partnersImageContainer}>
            <Image
              style={styles.partnersImage}
              source={require("../../../assets/images/HomeScreen/ISRO_Logo.png")}
            />
          </View> */}
        </View>

        <View style={styles.partnersDescriptionContainer}>
          <Text style={styles.partnersDescription}>
            Find Kheticulture products certified under Govt. of India under ISRO{" "}
          </Text>
        </View>
      </View>
      {/* Partners Card END */}

      {/* Privacy Policy Card END */}
      <View style={styles.privacy}>
        <View style={styles.privacyDescriptionContainer}>
          <Text style={styles.privacyDescriptionTitle}>Privacy Policy</Text>
          <Text style={styles.privacyDescription}>
            At KhetiCulture, we respect the privacy of our users. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our application. Please read this privacy
            policy carefully.
          </Text>
          <Text style={styles.privacyDescription}>
            You are encouraged to periodically review this Privacy Policy to
            stay informed of updates.
          </Text>
          <View style={styles.privacyCustomButtonContainer}>
            <CustomButton
              title="Read More"
              onPress={() => alert("Read More")}
            />
          </View>
        </View>

        <View style={styles.privacyIconContainer}>
          <MaterialIcons
            name="privacy-tip"
            style={styles.privacyIcon}
            color={Colors.primary}
          />
        </View>
      </View>
      {/* Privacy Policy Card END */}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  Footer: {},
  support: {
    width: "100%",
    backgroundColor: Colors.white,
    padding: 20,
    flexDirection: "row",
  },
  supportIconContainer: {
    paddingRight: 7,
    paddingTop: 0,
  },
  supportIcon: {
    fontSize: 40,
  },
  supportDescriptionContainer: {
    paddingRight: 40,
  },
  supportDescriptionTitle: {
    fontSize: 22,
    fontFamily: "open-sans-bold",
    marginBottom: 10,
  },
  supportDescription: {
    fontFamily: "open-sans",
    fontSize: 13,
    color: Colors.grey,
  },
  supportCustomButtonContainer: {
    marginTop: 10,
    width: "50%",
  },
  partnersCard: {
    marginVertical: 20,
  },
  partners: {
    backgroundColor: Colors.white,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  partnersTitle: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    marginBottom: 7,
  },
  partnersImageContainer: {
    width: 300,
    height: 150,
  },
  partnersImage: {
    width: "100%",
    height: "100%",
  },
  partnersDescriptionContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: Colors.primary,
  },
  partnersDescription: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 16,
    fontFamily: "open-sans",
  },

  privacy: {
    width: "100%",
    backgroundColor: Colors.white,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  privacyIconContainer: {
    paddingRight: 15,
  },
  privacyIcon: {
    fontSize: 40,
  },
  privacyDescriptionContainer: {
    paddingLeft: 10,
    paddingRight: 20,
  },
  privacyDescriptionTitle: {
    fontSize: 22,
    fontFamily: "open-sans-bold",
    marginBottom: 10,
  },
  privacyDescription: {
    fontFamily: "open-sans",
    fontSize: 13,
    color: Colors.grey,
    marginBottom: 5,
  },
  privacyCustomButtonContainer: {
    marginTop: 10,
    width: "50%",
  },
});
