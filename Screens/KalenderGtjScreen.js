import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet } from 'react-native'
import FetchApp from '../Components/FetchApp'



const KalenderScreen = (props) => {

  const styles = StyleSheet.create({
    img: {
      flex:1,
      height: 200,
      width: '100%',
      resizeMode: "cover"
    },
  });
 
    return (
      <View>
              <ScrollView >
              <Image 
      style={styles.img}
      source={require('../assets/Kalender/Gudstjanstkalender.jpg')}
      />
            <FetchApp navigateReferens={props} KategoriFilter={'Gtj'}  />
        </ScrollView>
        </View>
        
    )
}

KalenderScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter Gtj',

  };
};


export default KalenderScreen
