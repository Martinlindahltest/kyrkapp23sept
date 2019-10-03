import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet } from 'react-native'
import FetchApp from '../Components/FetchApp'



const KalenderMusikScreen = (props) => {

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
      source={require('../assets/Kalender/Musikkalender.jpg')}
      />
            <FetchApp navigateReferens={props} KategoriFilter={'Gtj'}  />
        </ScrollView>
        </View>
        
    )
}

KalenderMusikScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Musik',

  };
};


export default KalenderMusikScreen
