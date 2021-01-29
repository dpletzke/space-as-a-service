import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordianItemHeader = (props) => {
  const { toggle, title, isToggled } = props;
  return (
    <View onClick={toggle} style={styles.containerName}>
      <Text style={styles.name}>{title}</Text>
      <Text>{isToggled ? <FiMinus /> : <FiPlus />}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerName: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#123456",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "4rem",
    paddingVertical: "1rem",
    marginVertical: "0.1rem",
    borderRadius: "1rem",
  },
  name: {
    color: "white",
    fontSize: "2rem",
  },
});

export default AccordianItemHeader;
