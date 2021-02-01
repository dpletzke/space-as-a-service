import React, {useState} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from "expo-constants";

import Accordian from './components/Accordian/index';
import DetailsView from './components/DetailsView';

// view and color constants
import { MAIN, DETAILS, LIGHT_GRAY } from './constants'

export default function App() {
  const [view, setView] = useState(MAIN); 
  const [details, setDetails] = useState({});

  const changeView = (view, data) => {
    if(view === MAIN) {
      setView(MAIN)
      setDetails({});
    }
    if(view === DETAILS) {
      setView(DETAILS);
      setDetails(data);  
    }
  }

  const controller = (view) => {
    if(view === MAIN) {
      return <Accordian changeView={changeView}/>}
    if(view === DETAILS) {
      return <DetailsView details={details} changeView={changeView}/>}
  }

  return (
    <>
      <View style={styles.statusContainer}>
        <StatusBar backgroundColor='white' barStyle='light-content' ></StatusBar>
      </View>
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        {controller(view)}
      </ScrollView>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  statusContainer: {
    flex: 1,
    height: Constants.statusBarHeight,
    backgroundColor: LIGHT_GRAY
  },
  container: {
    minHeight: '100%'
  }
});
