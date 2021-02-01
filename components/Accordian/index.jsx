import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Constants from "expo-constants";

import axios from "axios";

// fixtures for testing
// import { missionData } from "../fixtures/MissionData";
// import { launchData } from "../fixtures/LaunchData";
// import { launchSiteData } from "../fixtures/LaunchSiteData";

import { LIGHT_GRAY, MEDIUM_GRAY } from "../../constants";

import Header from "../Header";
import AccordianItem from "./AccordianItem";

const Accordian = (props) => {
  const { changeView } = props;

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
        setMissionData(missionRef);
      })
      .catch((err) => {
        console.error(err);
      });

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
              launch_date_local,
              links,
            } = launch;
            for (const id of mission_id) {
              const data = {
                launch_success,
                details,
                launch_site,
                flight_number,
                launch_date_local,
                location: launchSitesRef[launch_site.site_id],
                links,
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
    <View style={styles.container}>
      <Header title="SpaceX Missions"></Header>
      {/* <View style={styles.header}>
        <Text style={styles.textLarge}></Text>
      </View> */}
      <View style={styles.accordian}>
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
                changeView={changeView}
              />
            );
          })}
      </View>
    </View>
  );
};

export default Accordian;

const styles = StyleSheet.create({
  header: {
    backgroundColor: MEDIUM_GRAY,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    height: "20%",
    marginTop: Constants.statusBarHeight,
  },
  textLarge: {
    color: "white",
    fontSize: 20,
  },
  accordian: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
  },
  container: {
    backgroundColor: LIGHT_GRAY,
    minHeight: "100%",
  },
});
