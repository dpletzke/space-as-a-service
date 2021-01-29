import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconContext } from "react-icons";

import axios from "axios";

// import { missionData } from "../fixtures/MissionData";
// import { launchData } from "../fixtures/LaunchData";
// import { launchSiteData } from "../fixtures/LaunchSiteData";

import AccordianItemHeader from "./AccordianItemHeader";
import AccordianItemDetails from "./AccordianItemDetails";

const Accordian = (props) => {
  const [clicked, setClicked] = useState(false);
  const [missionData, setMissionData] = useState({});
  const [launchData, setLaunchData] = useState({});

  useEffect(() => {
    const urlMissions = "https://api.spacexdata.com/v3/missions";
    const urlLaunchpads = "https://api.spacexdata.com/v4/launchpads";
    const urlLaunches = "https://api.spacexdata.com/v4/launches/past";

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

    Promise.all([missionReq, launchReq, launchpadReq])
      .then(([__, { data: launches }, { data: launchSites }]) => {
        
        
        
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
      <View style={styles.container}>
        {missionData &&
          Object.values(missionData).map((data, index) => {
            const isToggled = clicked === index;
            const { mission_name: title, details } = data;
            return (
              <>
                <AccordianItemHeader
                  key={title}
                  {...{ title, isToggled }}
                  toggle={toggle(index)}
                />
                {isToggled && (
                  <AccordianItemDetails key={index} details={details} />
                )}
              </>
            );
          })}
      </View>
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
