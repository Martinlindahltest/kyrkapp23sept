import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';
import FetchApp from '../Components/FetchApp'
import Tabmeny5 from '../Components/Tabmeny5'

import HeaderButton from '../Components/HeaderButton'


const KalenderScreen = (props) => {

  const styles = StyleSheet.create({
    stretch: {
      height: 200,
      width: '100%',
      resizeMode: "cover"
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

              <ScrollView >

              <Image 
      style={styles.stretch}
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
              //
              //console.log(navData.navigation.navigate)
              //navData.navigation.navigate('DrawerToggle');'
              navData.navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          />
        </HeaderButtons>
      )
    };
  };


export default KalenderScreen
