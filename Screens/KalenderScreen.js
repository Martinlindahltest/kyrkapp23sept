import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';
import FetchApp from '../Components/FetchApp'
import Tabmeny5 from '../Components/Tabmeny5'

import HeaderButton from '../Components/HeaderButton'


const KalenderScreen = (props) => {

  const styles = StyleSheet.create({
    img: {
      flex:1,
      height: 200,
      width: '100%',
      resizeMode: "cover"
    },
    tabContainer: {
      height: 100
    }
  });

  /**
   *     <Image 
      style={styles.stretch}
      source={require('../assets/KalenderLiten.jpg')}
      />
   * 
   * 
   * 
   * 
   */


 
    return (
      <View>
        <View style={styles.tabContainer}>
        <Tabmeny5 KalenderScreenProps={props} />

        </View>

              <ScrollView >

              <Image 
      style={styles.img}
      source={require('../assets/Kalenderv2.jpg')}
      />
            <FetchApp navigateReferens={props} />
        </ScrollView>
        </View>
        
    )
}



KalenderScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Kalender',
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          />
        </HeaderButtons>
      )
    };
  };


export default KalenderScreen
