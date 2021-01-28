import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IconContext } from "react-icons";

import axios from "axios";

// import { missionData } from "../fixtures/MissionData";
// import { launchData } from "../fixtures/LaunchData";
// import { launchSiteData } from "../fixtures/LaunchSiteData";

import AccordianItem from "./AccordianItem";

const Accordian = (props) => {
  const [clicked, setClicked] = useState(false);
  const [missionData, setMissionData] = useState({});
  let launchData;
  let launchSiteData;

  useEffect(() => {
    const urlMissions = "https://api.spacexdata.com/v3/missions";
    const urlLaunchpads = "https://api.spacexdata.com/v3/launchpads";
    const urlLaunches = "https://api.spacexdata.com/v3/launches/past";
    axios
      .get(urlMissions)
      .then(({ data }) => {
        setMissionData(data);
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get(urlLaunchpads)
      .then(({ data }) => {
        launchSiteData = data;
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get(urlLaunches)
      .then(({ data }) => {
        launchData = data;
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

  // const data = missionData.reduce((acc, md) => {
  //   const { mission_name } = md;
  //   if (mission_name) acc[mission_name] = md;
  //   return acc;
  // }, {});

  // launchData.forEach((ld) => {
  //   if (ld.mission_name) {
  //     if (data[ld.mission_name[0]] && data[ld.mission_name[0]].launches) {
  //       data[ld.mission_name[0]].launches += `${ld.flight_number}`;
  //     }
  //   }
  // });

  // console.log(data);
  return (
    <IconContext.Provider value={{ color: "#00FF89", size: "25px" }}>
      <View style={styles.container}>
        {missionData &&
          Object.values(missionData).map((data, index) => {
            return (
              <AccordianItem
                data={data}
                key={index}
                toggle={toggle(index)}
                isToggled={clicked === index}
              />
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
