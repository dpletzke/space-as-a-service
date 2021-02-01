import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Octicons, Ionicons, FontAwesome } from "@expo/vector-icons";

import Constants from "expo-constants";

import NavButton from "./NavButton";

const MAIN = "MAIN";

const DetailsView = (props) => {
  const { changeView, details } = props;
  const { launch_success, location, launch_date_local } = details;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <NavButton
          onPress={() => changeView(MAIN, {})}
          symbol={<FontAwesome name="chevron-left" size={20} color="white" />}
        />
        <Text style={styles.textLarge}>Launch</Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.card}>
          <Text style={styles.text}>
            Date: {launch_date_local.substring(0, 10)}
          </Text>
          <Text style={styles.text}>
            Success:
            {launch_success ? (
              <Ionicons name="md-checkmark-circle" size={32} color="green" />
            ) : (
              <Octicons name="issue-opened" size={32} color="red" />
            )}
          </Text>
          <Text style={styles.text}>Location: {location.name}</Text>
          <Text style={styles.text}>Latitude: {location.latitude}</Text>
          <Text style={styles.text}>Longtitude: {location.longitude}</Text>
          <Text style={styles.text}>Details: {details.details}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#181c1f",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: Constants.statusBarHeight,
    height: "15%",
  },
  button: {
    marginLeft: 10,
  },
  textLarge: {
    color: "white",
    fontSize: 20,
    marginHorizontal: "auto",
  },
  text: {
    color: "white",
  },
  detailsContainer: {
    backgroundColor: "#22272b",
    display: "flex",
    flexDirection: "column",
    padding: 10,
    height: "85%",
  },
  container: {
    minHeight: "100%",
  },
  card: {
    backgroundColor: "#181c1f",
    borderRadius: 40,
    padding: 20,
  },
});

export default DetailsView;
