import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

import Constants from "expo-constants";

import { MEDIUM_GRAY } from "../constants";
import NavButton from "./NavButton";

const Header = (props) => {
  const { nav, title } = props;
  const headerStyle = [styles.header];

  if (nav) headerStyle.push(styles.headerNav);
  return (
    <View style={headerStyle}>
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
          <FontAwesome name="chevron-left" size={20} color={MEDIUM_GRAY} />
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: MEDIUM_GRAY,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: Constants.statusBarHeight,
    height: "15%",
  },
  headerNav: {
    justifyContent: "space-between",
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
