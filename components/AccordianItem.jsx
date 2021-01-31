import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import AccordianItemHeader from "./AccordianItemHeader";
import AccordianItemDetails from "./AccordianItemDetails";

const AccordianItem = (props) => {
  const { isToggled, header, toggle, details, changeView } = props;
  const { mission_name: title } = header;
  return (
    <View style={styles.container}>
      <AccordianItemHeader {...{ title, isToggled, toggle }} />
      {isToggled && (
        <>
          <View style={styles.columnHeaderContainer}>
            <Text style={styles.columnHeadersText}>Date</Text>
            <Text style={styles.columnHeadersText}>Success</Text>
            <Text style={styles.columnHeadersText}>Location</Text>
            <Text style={styles.columnHeadersText}>Details</Text>
          </View>
          <AccordianItemDetails details={details} changeView={changeView} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#0f1112",
    borderRadius: 40,
    backgroundColor: "#181C1F",
    marginVertical: 5,
  },
  columnHeadersText: {
    fontSize: 10,
    color: "white",
  },
  columnHeaderContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
});

export default AccordianItem;
