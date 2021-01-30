import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconContext } from "react-icons";

import AccordianItemHeader from "./AccordianItemHeader";
import AccordianItemDetails from "./AccordianItemDetails";

const AccordianItem = (props) => {
  const { isToggled, data, toggle } = props;
  const { mission_name: title, details } = data;
  console.log(data);
  return (
    <>
      <AccordianItemHeader {...{ title, isToggled, toggle }} />
      {isToggled && <AccordianItemDetails details={details} />}
    </>
  );
};

export default AccordianItem;
