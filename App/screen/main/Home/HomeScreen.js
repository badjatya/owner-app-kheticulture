import React from "react";
import { ScrollView, View, StatusBar } from "react-native";

// IMPORTING Components
import HomeCardIcons from "../../../components/main/HomeCardIcons/HomeCardIcons";
import Carousel from "../../../components/main/Carousel/Carousel";
import Footer from "../../../components/main/Footer/Footer";
import VideoContainer from "../../../components/UI/VideoContainer/VideoContainer";
import FeedbackContainer from "../../../components/UI/FeedbackContainer/FeedbackContainer";

// IMPORTING Colors
import Colors from "../../../constants/Colors";

const HomeScreen = (props) => {
  const { navigation } = props;

  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <ScrollView>
        <Carousel navigation={navigation} />
        <HomeCardIcons navigation={navigation} />
        <VideoContainer />
        <FeedbackContainer background="#fff" />
        <Footer navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
