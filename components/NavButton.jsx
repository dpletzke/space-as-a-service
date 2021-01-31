import React from "react";
import { Button } from "react-native";

const NavButton = (props) => {
  const { symbol, onPress } = props;
  return <Button title={symbol} onPress={onPress} />;
};

export default NavButton;
