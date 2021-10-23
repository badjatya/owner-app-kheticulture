import React from "react";
import { Platform, TouchableOpacity, View } from "react-native";

// IMPORTING Importing stack navigator
import { createStackNavigator } from "@react-navigation/stack";

// IMPORTING Importing Screens
import TractorScreen from "../../screen/tractor/TractorScreen/TractorScreen";

// IMPORTING Icons
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

// IMPORTING Colors
import Colors from "../../constants/Colors";

// NOTE Creating HomeStackNavigator
const TractorStackNavigator = createStackNavigator();

const TractorStackNavigatorScreen = () => {
  return (
    <TractorStackNavigator.Navigator
      screenOptions={{
        // headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
          height: 50,
        },
        headerTintColor:
          Platform.OS === "android" ? Colors.white : Colors.primary,
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
        headerBackTitleStyle: {
          fontFamily: "open-sans",
          fontWeight: "normal",
        },
      }}
    >
      <TractorStackNavigator.Screen name="Tractors" component={TractorScreen} />
    </TractorStackNavigator.Navigator>
  );
};

export default TractorStackNavigatorScreen;
