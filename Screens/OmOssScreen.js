import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements'
import { Linking } from 'expo';




import HeaderButton from '../Components/HeaderButton'

const styles = StyleSheet.create({
  partOne: {
    height: '30%'
  },
  partTwo: {
    height: '60%'
  },
  partThree: {
    height: '10%'
  }
});




const OmOssScreen = () => {
    return (
        <View >

          <View style={styles.partOne}>
            <Text>Design och Utveckling</Text>
            <Text>Kyrkappen</Text>

          </View>

          <View style={styles.partTwo}>
          <Text>För support och frågor kontakta</Text>
          <TouchableHighlight onPress={() => Linking.openURL('mailto: support@expo.io')} >
            <Text>jajaja</Text>
    </TouchableHighlight>
          </View>

          <View style={styles.partThree}>
            <Text>Version 1.0 November 2019</Text>
          </View>

        </View>
    )
}

OmOssScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Om oss',
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
