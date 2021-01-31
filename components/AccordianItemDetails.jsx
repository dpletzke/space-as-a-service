import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";

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
              <Text style={styles.text}>
                {launch_date_local.substring(0, 10)}
              </Text>
              {launch_success ? (
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
              ) : (
                <Octicons name="issue-opened" size={32} color="red" />
              )}
              <Text style={styles.text}>{location && location.name}</Text>
              <NavButton
                onPress={() => changeView(DETAILS, data)}
                symbol={">"}
              />
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 10,
  },
});

export default AccordianItemDetails;
