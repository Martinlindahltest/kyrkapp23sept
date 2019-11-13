import React from 'react'
import { View, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';


import HeaderButton from '../Components/HeaderButton'

import { WebView } from 'react-native-webview';
import blogUrl from '../dbConfig/blogUrl'



const PersonalScreen = () => {
    return (
    /* 
        <View >
            <Text>FiltersScreen Martins projekt</Text>
        </View>
        */
       <WebView source={{ uri: `${blogUrl}/personal-3` }} />
    )
}

PersonalScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Personal',
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


export default PersonalScreen
