import React from "react";
import { Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Importing Screens
import HomeStackNavigatorScreen from "../homeStack/homeStackNavigation"

// TODO: Importing Colors
import Colors from "../../constants/Colors";

// TODO: Importing Icons
import { FontAwesome, Foundation } from "@expo/vector-icons";

function BookingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Booking</Text>
    </View>
  );
}

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
        name="Bookings"
        component={BookingScreen}
        options={{
          tabBarIcon: () => (
            <Foundation
              name="clipboard-notes"
              size={24}
              color={Colors.primary}
            />
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
