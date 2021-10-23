import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

// IMPORTING Icons
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

// IMPORTING Colors
import Colors from "../../../constants/Colors";

// IMPORTING Styles
import styles from "./style";

const HomeCardIcons = (props) => {
  return (
    <View style={styles.HomeCard}>
      {/* ROW 1  */}
      <View style={styles.row}>
        {/* Item 1  */}
        <TouchableOpacity>
          <View style={styles.HomeCardItem}>
            <View style={styles.icon}>
              <FontAwesome5 name="seedling" size={32} color={Colors.primary} />
            </View>
            <Text style={styles.CardItemTitle}> Buy Seeds</Text>
          </View>
        </TouchableOpacity>

        {/* Item 2  */}
        <TouchableOpacity onPress={() => alert("Buy Seeds")}>
          <View style={styles.HomeCardItem}>
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name="seed"
                size={40}
                style={{ paddingLeft: 20 }}
                color={Colors.primary}
              />
            </View>
            <Text style={styles.CardItemTitle}> {"  "} Sell Seeds </Text>
          </View>
        </TouchableOpacity>

        {/* Item 3  */}
        <TouchableOpacity>
          <View style={styles.HomeCardItem}>
            <View style={styles.icon}>
              <FontAwesome5
                style={{ paddingLeft: 10 }}
                name="tractor"
                size={32}
                color={Colors.primary}
              />
            </View>
            <Text style={styles.CardItemTitle}>Book Tractor</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ paddingBottom: 15 }} />

      {/* ROW 2  */}
      <View style={styles.row}>
        {/* Item 1  */}
        <TouchableOpacity onPress={() => alert("Buy Seeds")}>
          <View style={styles.HomeCardItem}>
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name="tractor-variant"
                size={40}
                color={Colors.primary}
              />
            </View>
            <Text style={styles.CardItemTitle}>Rent Tractor</Text>
          </View>
        </TouchableOpacity>

        {/* Item 2  */}
        <TouchableOpacity onPress={() => alert("Buy Seeds")}>
          <View style={styles.HomeCardItem}>
            <View style={styles.icon}>
              <FontAwesome5 name="user-alt" size={32} color={Colors.primary} />
            </View>
            <Text style={styles.CardItemTitle}>Hire Labour</Text>
          </View>
        </TouchableOpacity>

        {/* Item 3  */}
        <TouchableOpacity onPress={() => alert("Buy Seeds")}>
          <View style={styles.HomeCardItem}>
            <View style={styles.icon}>
              <FontAwesome5 name="users" size={32} color={Colors.primary} />
            </View>
            <Text style={styles.CardItemTitle}>Add labour</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ paddingBottom: 15 }} />

      {/* ROW 3  */}
      <View style={styles.row}>
        {/* Item 1  */}
        <TouchableOpacity onPress={() => alert("Buy Seeds")}>
          <View style={styles.HomeCardItem}>
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name="watering-can"
                size={40}
                color={Colors.primary}
              />
            </View>
            <Text style={styles.CardItemTitle}>Buy Fertilizer</Text>
          </View>
        </TouchableOpacity>

        {/* Item 2  */}
        <TouchableOpacity onPress={() => alert("Buy Boosters")}>
          <View style={styles.HomeCardItem}>
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name="cow"
                style={{ paddingRight: 9 }}
                size={40}
                color={Colors.primary}
              />
            </View>
            <Text style={styles.CardItemTitle}>Buy Booster</Text>
          </View>
        </TouchableOpacity>

        {/* Item 3  */}
        <TouchableOpacity onPress={() => alert("Buy Tools")}>
          <View style={styles.HomeCardItem}>
            <View style={styles.icon}>
              <FontAwesome5
                style={{ paddingRight: 9 }}
                name="tools"
                size={32}
                color={Colors.primary}
              />
            </View>
            <Text style={styles.CardItemTitle}>Buy Tools</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeCardIcons;
