import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet } from 'react-native'
import FetchApp from '../Components/FetchApp'



const KalenderGtjScreen = (props) => {

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

KalenderGtjScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Gudtjänst',

  };
};


export default KalenderGtjScreen
