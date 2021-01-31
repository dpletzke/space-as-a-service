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
  const [launchData, setLaunchData] = useState({});

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
        const missionRef = data.reduce((acc, md) => {
          const { mission_id, mission_name } = md;
          acc[md.mission_id] = { mission_id, mission_name };
          return acc;
        }, {});
        console.log(missionRef);
        setMissionData(missionRef);
      })
      .catch((err) => {
        console.error(err);
      });

    // I want to set an individual state for each details component
    // I want them to update individually once the data is recieved
    //

    Promise.all([missionReq, launchReq, launchpadReq])
      .then(
        ([{ data: missions }, { data: launches }, { data: launchSites }]) => {
          const launchSitesRef = launchSites.reduce((acc, ls) => {
            acc[ls.site_id] = ls.location;
            return acc;
          }, {});
          const launchRef = launches.reduce((acc, launch) => {
            const {
              launch_success,
              mission_id,
              details,
              launch_site,
              flight_number,
            } = launch;
            for (const id of mission_id) {
              const data = {
                launch_success,
                details,
                launch_site,
                flight_number,
                location: launchSitesRef[launch_site.site_id],
              };
              if (acc[id]) {
                acc[id].push(data);
              } else {
                acc[id] = [data];
              }
            }
            return acc;
          }, {});
          setLaunchData(launchRef);
        }
      )
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
                isToggled={isToggled}
                toggle={toggle(index)}
                header={data}
                details={launchData[data.mission_id]}
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
    margin: "2rem",
  },
});
