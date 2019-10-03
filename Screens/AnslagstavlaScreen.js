import React from 'react'
import { View, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';

import HeaderButton from '../Components/HeaderButton'


const AnslagstavlaScreen = () => {
    return (

        <View >
            <Text>AnslagstavlaScreen Martins projekt</Text>
        </View>

    ) 
}

AnslagstavlaScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Händelser',
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


export default AnslagstavlaScreen
