import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

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
    backgroundColor: "#0F1112",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});

export default NavButton;
