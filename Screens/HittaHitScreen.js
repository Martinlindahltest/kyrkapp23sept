import React from 'react'
import { ScrollView, Image, View, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';


import HeaderButton from '../Components/HeaderButton'

import { WebView } from 'react-native-webview';



const HittaHitScreen = () => {
    return (
    /* 
        <View >
            <Text>FiltersScreen Martins projekt</Text>
        </View>
        */
            <WebView source={{ uri: 'https://tullinge.digitalindahl.com/hitta-hit' }} />

    )
}

HittaHitScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Hitta hit',
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


export default HittaHitScreen
