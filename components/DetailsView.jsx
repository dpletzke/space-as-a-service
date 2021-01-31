import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Constants from "expo-constants";

import NavButton from "./NavButton";

const MAIN = "MAIN";

const DetailsView = (props) => {
  const { changeView, details } = props;
  const { launch_success, location, launch_date_local } = details;
  console.log(location);
  return (
    <>
      <View style={styles.header}>
        <NavButton onPress={() => changeView(MAIN, {})} symbol={"<"} />
        <Text style={styles.textLarge}>Launch</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.text}>
            Date: {launch_date_local.substring(0, 10)}
          </Text>
          <Text style={styles.text}>
            Success: {launch_success ? "✔️" : "❌"}
          </Text>
          <Text style={styles.text}>Location: {location.name}</Text>
          <Text style={styles.text}>Latitude: {location.latitude}</Text>
          <Text style={styles.text}>Longtitude: {location.longitude}</Text>
          <Text style={styles.text}>Details: {details.details}</Text>
        </View>
      </View>
    </>
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
  container: {
    backgroundColor: "#22272b",
    display: "flex",
    flexDirection: "column",
    padding: 10,
    minHeight: "85%",
  },
  card: {
    backgroundColor: "#181c1f",
    borderRadius: 40,
    padding: 20,
  },
});

export default DetailsView;
