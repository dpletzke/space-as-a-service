import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import NavButton from "./NavButton";

const AccordianItemHeader = (props) => {
  const { toggle, title, isToggled } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{title}</Text>
      <NavButton onPress={toggle} symbol={isToggled ? "➖" : "➕"} />
      {/* <Text>
        {isToggled ? (
          <AntDesign name="minus" size={24} color="white" />
        ) : (
          <AntDesign name="plus" size={24} color="white" />
        )}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#0F1112",
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
});

export default AccordianItemHeader;
