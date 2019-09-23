import React from 'react'
import { View, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';


import HeaderButton from '../Components/HeaderButton'

import { WebView } from 'react-native-webview';



const HändelserScreen = () => {
    return (
    /* 
        <View >
            <Text>FiltersScreen Martins projekt</Text>
        </View>
        */
       <WebView source={{ uri: 'https://tullinge.digitalindahl.com/blogsida' }} style={{ marginTop: 20 }} />
    )
}

HändelserScreen.navigationOptions = navData => {
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


export default HändelserScreen
