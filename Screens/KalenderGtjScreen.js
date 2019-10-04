import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet } from 'react-native'
import FetchApp from '../Components/FetchApp'
import Tabmeny5 from '../Components/Tabmeny5'



const KalenderGtjScreen = (props) => {

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
      source={require('../assets/Kalender/Gudstjanstkalender.jpg')}
      />
            <FetchApp navigateReferens={props} KategoriFilter={'Gtj'}  />
        </ScrollView>
        </View>
        
    )
}

KalenderGtjScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Gudtjänstkalender',

  };
};


export default KalenderGtjScreen
