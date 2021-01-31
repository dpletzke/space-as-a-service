import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Accordian from './components/Accordian';
import DetailsView from './components/DetailsView';

// view constants
const MAIN = 'MAIN';
const DETAILS = 'DETAILS';

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
    <StatusBar backgroundColor='#ffffff' barStyle='light-content' ></StatusBar>
    </View>
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.container}>
        {controller(view)}
      </ScrollView>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  statusContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
  },
  safeContainer: {
    minHeight: '100%'
  },
  container: {
    minHeight: '100%'
  }
});
