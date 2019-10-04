import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet } from 'react-native'
import FetchApp from '../Components/FetchApp'
import Tabmeny5 from '../Components/Tabmeny5'



const KalenderMusikScreen = (props) => {

  const styles = StyleSheet.create({
    img: {
      flex:1,
      height: 200,
      width: '100%',
      resizeMode: "cover"
    },
    tabContainer: {
      height: 70 
    }
  });
 
    return (
      <View>
                <View style={styles.tabContainer}>
        <Tabmeny5 KalenderScreenProps={props} />

        </View>
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
