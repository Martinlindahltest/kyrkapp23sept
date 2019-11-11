import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';


import HeaderButton from '../Components/HeaderButton'




const OmOssScreen = () => {
    return (
        <View >
            <Text>FiltersScreen Martins projekt</Text>
            <Text>FiltersScreen Martins projekt</Text>
            <Text>FiltersScreen Martins projekt</Text>
            <Text>FiltersScreen Martins projekt</Text>
            <Text>FiltersScreen Martins projekt</Text>
            <Text>FiltersScreen Martins projekt</Text>
            <Text>FiltersScreen Martins projekt</Text>
            <Text>FiltersScreen Martins projekt</Text>
            <Text>FiltersScreen Martins projekt</Text>
            <Text>FiltersScreen Martins projekt</Text>
            <Text>FiltersScreen Martins projekt</Text>
            <Text>FiltersScreen Martins projekt</Text>
            <Text>FiltersScreen Martins projekt</Text>

        </View>
    )
}

OmOssScreen.navigationOptions = navData => {
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

export default OmOssScreen
