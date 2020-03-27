import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import MealsNavigator from './Navigation/MealsNavigator'
import * as Font from 'expo-font';
import { AppLoading } from 'expo'
import { Assets } from 'react-navigation-stack';


const fetchFonts = () => {
  return Font.loadAsync({
    'avenir-roman': require('./assets/fonts/Avenir-Roman.ttf')
  });
  
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState();

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }



  return (
    <>
<StatusBar barStyle="default" />
    <MealsNavigator />
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//Innan jag grejar med app.json