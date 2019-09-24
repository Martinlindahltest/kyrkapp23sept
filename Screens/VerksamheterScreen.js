import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';
import FetchVerksamheter from '../Components/FetchVerksamheter'


import HeaderButton from '../Components/HeaderButton'




const VerksamheterScreen = () => {
    return (
     
        <ScrollView >
            <Text>VerksamheterScreen</Text>
           
             <FetchVerksamheter />
           

        </ScrollView>
        
    )
} 

VerksamheterScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Verksamheter',
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


export default VerksamheterScreen
