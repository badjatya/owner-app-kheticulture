import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// Import Navigation
import Navigation from "./App/navigation/navigation";

// Importing Fonts
import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";

// IMPORTING Redux and root reducer
import { Provider } from "react-redux";
import store from "./App/store/reducers/rootReducers";

// Fetching Fonts
const fetchFonts = () => {
  return Fonts.loadAsync({
    "open-sans": require("./App/assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./App/assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  // font state
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
