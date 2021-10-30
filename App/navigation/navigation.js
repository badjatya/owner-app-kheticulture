import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

// Importing Navigation
// import BottomTabNavigatorScreen from './bottomTab/bottomTabnav';
import AuthNavigatorScreen from "./AuthStack/Auth";

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthNavigatorScreen />
    </NavigationContainer>
  );
};

export default Navigation;
