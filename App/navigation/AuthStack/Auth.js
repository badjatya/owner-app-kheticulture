import React from "react";
import { Platform, TouchableOpacity, View } from "react-native";

// IMPORTING Importing stack navigator
import { createStackNavigator } from "@react-navigation/stack";

// IMPORTING Importing Screens
import Welcome from "../../screen/main/Auth/Welcome/Welcome";
import BottomTabNavigatorScreen from "../bottomTab/bottomTabnav";

// NOTE Creating HomeStackNavigator
const AuthStackNavigator = createStackNavigator();

const AuthNavigatorScreen = () => {
  return (
    <AuthStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStackNavigator.Screen name="Welcome" component={Welcome} />
      <AuthStackNavigator.Screen
        name="BottomTabNavigatorScreen"
        component={BottomTabNavigatorScreen}
      />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthNavigatorScreen;
