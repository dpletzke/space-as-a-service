import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const AccordianItemHeader = (props) => {
  const { toggle, title, isToggled } = props;
  return (
    <Button onClick={toggle} onPress={toggle} style={styles.containerName}>
      <Text style={styles.name}>{title}</Text>
      <Text>
        {isToggled ? (
          <AntDesign name="minus" size={24} color="white" />
        ) : (
          <AntDesign name="plus" size={24} color="white" />
        )}
      </Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  containerName: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#123456",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 4,
    height: 100,
  },
  name: {
    color: "white",
    fontSize: 20,
  },
});

export default AccordianItemHeader;
