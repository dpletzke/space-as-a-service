import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const AccordianItemDetails = (props) => {
  const { details } = props;
  return (
    <View>
      <Text>{details}</Text>
    </View>
  );
};

export default AccordianItemDetails;
