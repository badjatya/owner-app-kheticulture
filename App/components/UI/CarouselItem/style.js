import { StyleSheet, Dimensions } from "react-native";

// Using Dimensions
const MAX_WIDTH = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  carouselItem: {
    marginBottom: 20,
  },
  container: {
    flexDirection: "row",
    width: "80%",
  },
  image: {
    height: 300,
    width: MAX_WIDTH,
  },
  indicatorContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: MAX_WIDTH,
    bottom: 5,
    zIndex: 2,
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderColor: "#fff",
    borderWidth: 1,
    marginHorizontal: 6,
    marginBottom: 5,
  },
  activeIndicator: {
    backgroundColor: "#fff",
  },
});

export default styles;
