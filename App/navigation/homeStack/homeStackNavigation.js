import React from "react";
import { Platform, TouchableOpacity, View } from "react-native";

// IMPORTING Importing stack navigator
import { createStackNavigator } from "@react-navigation/stack";

// IMPORTING Importing Screens
import HomeScreen from "../../screen/main/Home/HomeScreen";

// IMPORTING Icons
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

// IMPORTING Colors
import Colors from "../../constants/Colors";

// NOTE Creating HomeStackNavigator
const HomeStackNavigator = createStackNavigator();

const HomeStackNavigatorScreen = () => {
  return (
    <HomeStackNavigator.Navigator
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
      <HomeStackNavigator.Screen
        name="Kheticulture"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity>
              <FontAwesome
                style={{ paddingLeft: 15 }}
                name="bars"
                size={24}
                color={Colors.white}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <FontAwesome
                style={{ paddingRight: 15 }}
                name="shopping-cart"
                size={27}
                color={Colors.white}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStackNavigatorScreen;
