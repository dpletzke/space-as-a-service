import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import NavButton from "../NavButton";

import { DARK_GRAY } from "../../constants";

const AccordianItemHeader = (props) => {
  const { toggle, title, isToggled } = props;
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{title}</Text>
      </View>
      <NavButton
        onPress={toggle}
        symbol={
          isToggled ? (
            <FontAwesome name="minus" size={24} color="white" />
          ) : (
            <FontAwesome name="plus" size={24} color="white" />
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: DARK_GRAY,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 40,
    height: 100,
  },
  name: {
    color: "white",
    fontSize: 20,
  },
  nameContainer: {
    maxWidth: "70%",
  },
});

export default AccordianItemHeader;
