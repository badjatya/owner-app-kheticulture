import React from "react";
import { Platform, TouchableOpacity, View } from "react-native";

// IMPORTING Importing stack navigator
import { createStackNavigator } from "@react-navigation/stack";

// IMPORTING Importing Screens
import Welcome from "../../screen/main/Auth/Welcome/Welcome";
import BottomTabNavigatorScreen from "../bottomTab/bottomTabnav";
import Login from "../../screen/main/Auth/Login/Login";
import Signup from "../../screen/main/Auth/Signup/Signup";

// NOTE Creating HomeStackNavigator
const AuthStackNavigator = createStackNavigator();

const AuthNavigatorScreen = () => {
  return (
    <AuthStackNavigator.Navigator
    // screenOptions={{
    //   headerShown: false,
    // }}
    >
      <AuthStackNavigator.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <AuthStackNavigator.Screen
        name="BottomTabNavigatorScreen"
        component={BottomTabNavigatorScreen}
        options={{
          headerShown: false,
        }}
      />

      <AuthStackNavigator.Screen name="Login" component={Login} />
      <AuthStackNavigator.Screen name="Signup" component={Signup} />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthNavigatorScreen;
