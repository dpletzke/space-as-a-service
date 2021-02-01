import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons, Octicons, FontAwesome } from "@expo/vector-icons";

import NavButton from "./NavButton";

const DETAILS = "DETAILS";

const AccordianItemDetails = (props) => {
  const { details, changeView } = props;
  return (
    <View>
      {details &&
        details.map((data, index) => {
          const { launch_success, location, launch_date_local } = data;
          return (
            <View key={index} style={styles.container}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  {launch_date_local.substring(0, 10)}
                </Text>
              </View>
              <View style={styles.textContainer}>
                {launch_success ? (
                  <Ionicons
                    name="md-checkmark-circle"
                    size={32}
                    color="green"
                  />
                ) : (
                  <Octicons name="issue-opened" size={32} color="red" />
                )}
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{location && location.name}</Text>
              </View>
              <View style={styles.textContainer}>
                <NavButton
                  onPress={() => changeView(DETAILS, data)}
                  symbol={
                    <FontAwesome name="chevron-right" size={20} color="white" />
                  }
                />
              </View>
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 10,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 20,
  },
});

export default AccordianItemDetails;
