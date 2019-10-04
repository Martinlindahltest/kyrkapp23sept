import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet } from 'react-native'
import FetchApp from '../Components/FetchApp'
import Tabmeny5 from '../Components/Tabmeny5'



const KalenderVuxenScreen = (props) => {

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
      source={require('../assets/Kalender/Ungvuxenkalender.jpg')}
      />
            <FetchApp navigateReferens={props} KategoriFilter={'Gtj'}  />
        </ScrollView>
        </View>
        
    )
}

KalenderVuxenScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Ung/Vuxenkalender',

  };
};


export default KalenderVuxenScreen
