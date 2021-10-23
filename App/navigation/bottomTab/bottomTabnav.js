import React from "react";
import { Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Importing Screens
import HomeStackNavigatorScreen from "../homeStack/homeStackNavigation";
import TractorStackNavigatorScreen from "../tractorStack/tractorStack";

// Importing Colors
import Colors from "../../constants/Colors";

// Importing Icons
import { FontAwesome, Foundation, FontAwesome5 } from "@expo/vector-icons";

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile</Text>
    </View>
  );
}

const BottomTabNavigation = createBottomTabNavigator();

const BottomTabNavigatorScreen = () => {
  return (
    <BottomTabNavigation.Navigator
      options={{
        tabBarOptions: {
          activeTintColor: Colors.primary,
          inactiveTintColor: Colors.grey,
        },
      }}
    >
      <BottomTabNavigation.Screen
        name="Home"
        component={HomeStackNavigatorScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="home" size={24} color={Colors.primary} />
          ),
        }}
      />
      <BottomTabNavigation.Screen
        name="Tractors"
        component={TractorStackNavigatorScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="tractor" size={24} color={Colors.primary} />
          ),
        }}
      />
      <BottomTabNavigation.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="user" size={24} color={Colors.primary} />
          ),
        }}
      />
    </BottomTabNavigation.Navigator>
  );
};

export default BottomTabNavigatorScreen;
