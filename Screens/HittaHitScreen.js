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
        <View>
            <Image style={{
              width: 390, height: 390
            }} 
              source={require('../assets/KontaktKarta.png')} />
              <Text>test</Text>
            <WebView source={{ uri: 'https://tullinge.digitalindahl.com/hitta-hit' }} />
          </View>

    )
}

HittaHitScreen.navigationOptions = navData => {
    return {
      headerTitle: 'HittaHit',
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
