import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';
import FetchApp from '../Components/FetchApp'

import HeaderButton from '../Components/HeaderButton'


const KalenderScreen = () => {
    return (
    
        <ScrollView >
            <Text>KalenderScreen</Text>
            <FetchApp />
        </ScrollView>
        
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
