import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from "react-native-table-component";

import Constants from "expo-constants";

import NavButton from "./NavButton";

const MAIN = "MAIN";

const DetailsView = (props) => {
  const { changeView, details } = props;
  const { launch_success, location, launch_date_local, links } = details;

  const launchImageURI =
    links && links.flickr_images ? links.flickr_images[0] : null;
  console.log(launchImageURI);
  const tableTitle = [
    "Date:",
    "Success:",
    "Location:",
    "Latitude",
    "Longitude",
  ];
  const tableData = [
    [launch_date_local.substring(0, 10)],
    [launch_success ? "✅" : "❗"],
    [location.name],
    [location.latitude],
    [location.longitude],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <NavButton
          onPress={() => changeView(MAIN, {})}
          symbol={<FontAwesome name="chevron-left" size={20} color="white" />}
          style={styles.button}
        />
        <Text style={styles.textLarge}>Launch</Text>
        <Text style={{ width: 50 }}>
          <FontAwesome name="chevron-left" size={20} color="#181c1f" />
        </Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.card}>
          <Image
            style={styles.launchImage}
            source={{ uri: launchImageURI }}
            resizeMode="cover"
            defaultSource={require("../assets/spacex_logo.png")}
          />
          <Table>
            <TableWrapper style={styles.wrapper}>
              <Col
                data={tableTitle}
                style={styles.title}
                heightArr={[28, 28]}
                textStyle={styles.text}
              />
              <Rows
                data={tableData}
                flexArr={[2]}
                style={styles.row}
                textStyle={styles.text}
              />
            </TableWrapper>
          </Table>
          {details.details && (
            <View>
              <Text style={styles.textLarge}>Details</Text>
              <Text style={styles.text}>{details.details}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#181c1f",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: Constants.statusBarHeight,
    height: "15%",
  },
  launchImage: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  button: {
    marginLeft: 10,
  },
  textLarge: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  detailsContainer: {
    backgroundColor: "#22272b",
    display: "flex",
    flexDirection: "column",
    padding: 10,
    height: "85%",
  },
  container: {
    minHeight: "100%",
  },
  card: {
    backgroundColor: "#181c1f",
    borderRadius: 40,
    padding: 20,
    marginBottom: 20,
    flex: 1,
    flexDirection: "column",
  },
  wrapper: { flexDirection: "row" },
  title: { flex: 1 },
  row: { height: 28, flex: 1 },
});

export default DetailsView;
