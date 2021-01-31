import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconContext } from "react-icons";

import AccordianItemHeader from "./AccordianItemHeader";
import AccordianItemDetails from "./AccordianItemDetails";

const AccordianItem = (props) => {
  const { isToggled, header, toggle, details } = props;
  const { mission_name: title } = header;
  return (
    <View style={styles.container}>
      <AccordianItemHeader {...{ title, isToggled, toggle }} />
      {isToggled && (
        <>
          <Text>Success/Fail|Description|Coordinates</Text>
          <AccordianItemDetails details={details} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowOpacity: 5,
  },
});

export default AccordianItem;
