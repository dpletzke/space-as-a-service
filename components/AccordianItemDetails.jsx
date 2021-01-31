import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";

const AccordianItemDetails = (props) => {
  const { details } = props;
  return (
    <View>
      {details &&
        details.map((data, index) => {
          const { launch_success, details, location } = data;
          return (
            <View key={index} style={styles.container}>
              {launch_success ? (
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
              ) : (
                <Octicons name="issue-opened" size={32} color="red" />
              )}
              <Text>{details && Object.values(details)}</Text>
              <Text>{location && Object.values(location)}</Text>
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
  },
});

export default AccordianItemDetails;
