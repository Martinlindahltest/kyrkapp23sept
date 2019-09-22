import React from 'react'
import { View, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';


import HeaderButton from '../Components/HeaderButton'


const FiltersScreen = () => {
    return (
        <View >
            <Text>FiltersScreen Martins projekt</Text>
        </View>
    )
}

FiltersScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Filter Meals',
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


export default FiltersScreen
