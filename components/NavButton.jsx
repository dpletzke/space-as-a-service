import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

import { DARK_GRAY } from "../constants";

const NavButton = (props) => {
  const { symbol, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{symbol}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: 10,
    borderRadius: 50,
    height: 50,
    width: 50,
    padding: 3,
    backgroundColor: DARK_GRAY,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 40,
  },
  text: {
    color: "white",
  },
});

export default NavButton;
