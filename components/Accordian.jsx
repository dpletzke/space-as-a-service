import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { IconContext } from "react-icons";

import axios from "axios";

// import { missionData } from "../fixtures/MissionData";
// import { launchData } from "../fixtures/LaunchData";
// import { launchSiteData } from "../fixtures/LaunchSiteData";

import AccordianItemHeader from "./AccordianItemHeader";
import AccordianItemDetails from "./AccordianItemDetails";
import AccordianItem from "./AccordianItem";

const Accordian = (props) => {
  const [clicked, setClicked] = useState(false);
  const [missionData, setMissionData] = useState({});

  useEffect(() => {
    const urlMissions = "https://api.spacexdata.com/v3/missions";
    const urlLaunchpads = "https://api.spacexdata.com/v3/launchpads";
    const urlLaunches = "https://api.spacexdata.com/v3/launches/past";

    const missionReq = axios.get(urlMissions);
    const launchReq = axios.get(urlLaunches);
    const launchpadReq = axios.get(urlLaunchpads);
    // sets mission state separatly from mission detail state

    missionReq
      .then(({ data }) => {
        setMissionData(data);
      })
      .catch((err) => {
        console.error(err);
      });

    // I want to set an individual state for each details component
    // I want them to update individually once the data is recieved
    //
    Promise.all([missionReq, launchReq, launchpadReq])
      .then(([__, { data: launches }, { data: launchSites }]) => {
        launches.forEach((launch) => {
          console.log(launch.mission_id, launch.mission_name);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const toggle = (index) => {
    return () => {
      if (clicked === index) {
        return setClicked(null);
      }
      setClicked(index);
    };
  };

  return (
    <IconContext.Provider value={{ color: "#00FF89", size: "25px" }}>
      <SafeAreaView style={styles.container}>
        {missionData &&
          Object.values(missionData).map((data, index) => {
            const isToggled = clicked === index;
            return (
              <AccordianItem
                key={index}
                isToggled
                toggle={toggle(index)}
                data={data}
              />
            );
          })}
      </SafeAreaView>
    </IconContext.Provider>
  );
};

export default Accordian;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "1.5rem",
  },
});
