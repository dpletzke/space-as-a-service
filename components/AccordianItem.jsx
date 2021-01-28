import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordianItem = (props) => {
  const { toggle, data, isToggled } = props;

  return (
    <>
      <View onClick={toggle} style={styles.containerName}>
        <Text style={styles.name}>{data.mission_name}</Text>
        <Text>{isToggled ? <FiMinus /> : <FiPlus />}</Text>
      </View>
      {isToggled && (
        <View>
          <Text>{data.payload_ids}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  containerName: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#123456",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "5rem",
  },
  name: {
    color: "white",
    fontSize: "2rem",
  },
});

export default AccordianItem;
