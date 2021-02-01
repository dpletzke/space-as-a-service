import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AccordianItemHeader from "./AccordianItemHeader";
import AccordianItemDetails from "./AccordianItemDetails";

import { DARK_GRAY, LIGHT_GRAY, MEDIUM_GRAY } from "../../constants";

const AccordianItem = (props) => {
  const { isToggled, header, toggle, details, changeView } = props;
  const { mission_name: title } = header;
  return (
    <View style={styles.container}>
      <AccordianItemHeader {...{ title, isToggled, toggle }} />
      {isToggled && (
        <>
          <View style={styles.columnHeadersContainer}>
            <View styles={styles.columnHeadersTextContainer}>
              <Text style={styles.columnHeadersText}>Launch Date</Text>
            </View>
            <View styles={styles.columnHeadersTextContainer}>
              <Text style={styles.columnHeadersText}>Success</Text>
            </View>
            <View styles={styles.columnHeadersTextContainer}>
              <Text style={styles.columnHeadersText}>Location</Text>
            </View>
            <View styles={styles.columnHeadersTextContainer}>
              <Text style={styles.columnHeadersText}>Details</Text>
            </View>
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
    borderColor: DARK_GRAY,
    borderRadius: 40,
    backgroundColor: MEDIUM_GRAY,
    marginVertical: 5,
    overflow: "hidden",
  },
  columnHeadersText: {
    fontSize: 10,
    color: "white",
  },
  columnHeadersTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 80,
  },
  columnHeadersContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: LIGHT_GRAY,
    paddingVertical: 10,
    marginBottom: 10,
  },
});

export default AccordianItem;
