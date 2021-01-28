import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

import { missionData } from "../fixtures/MissionData";
import { launchData } from "../fixtures/LaunchData";
import { launchSiteData } from "../fixtures/LaunchSiteData";

import AccordianItem from "./AccordianItem";

const Accordian = (props) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    return () => {
      if (clicked === index) {
        return setClicked(null);
      }
      setClicked(index);
    };
  };

  const data = missionData.reduce((acc, md) => {
    const { mission_name } = md;
    if (mission_name) acc[mission_name] = md;
    return acc;
  }, {});

  launchData.forEach((ld) => {
    if (ld.mission_name) {
      console.log(ld.mission_name);
      if (data[ld.mission_name[0]] && data[ld.mission_name[0]].launches) {
        data[ld.mission_name[0]].launches += `${ld.flight_number}`;
      }
    }
  });

  console.log(data);
  return (
    <IconContext.Provider value={{ color: "#00FF89", size: "25px" }}>
      {Object.values(data).map((data, index) => {
        return (
          <AccordianItem
            data={data}
            key={index}
            toggle={toggle(index)}
            isToggled={clicked === index}
          />
        );
      })}
    </IconContext.Provider>
  );
};

export default Accordian;

const styles = StyleSheet.create({
  accordianItem: {
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 30px 5px 30px",
    border: "2px solid black",
    cursor: "pointer",
  },
});
