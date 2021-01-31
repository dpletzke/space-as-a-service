import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FaRegSmile } from "react-icons/fa";
import { GiMineExplosion } from "react-icons/gi";

const AccordianItemDetails = (props) => {
  const { details } = props;
  return (
    <View>
      {details &&
        details.map((data, index) => {
          const { launch_success, details, location } = data;
          return (
            <View key={index} style={styles.container}>
              <Text>
                {launch_success ? <FaRegSmile /> : <GiMineExplosion />}
              </Text>
              <Text>{details && Object.values(details)}</Text>
              <Text>{location && Object.values(location)}</Text>
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    borderWidth: "1px",
  },
});

export default AccordianItemDetails;
