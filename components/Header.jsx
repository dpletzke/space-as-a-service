import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

import NavButton from "./NavButton";

const Header = (props) => {
  const { nav, title } = props;
  return (
    <View style={styles.header}>
      {nav && (
        <NavButton
          onPress={nav.onPress}
          symbol={<FontAwesome name={nav.symbol} size={20} color="white" />}
          style={styles.button}
        />
      )}
      <Text style={styles.textLarge}>{title}</Text>
      {nav && (
        <Text style={{ width: 50 }}>
          <FontAwesome name="chevron-left" size={20} color="#181c1f" />
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#181c1f",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: Constants.statusBarHeight,
    height: "15%",
  },
  textLarge: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    marginLeft: 10,
  },
});

export default Header;
