import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, SafeAreaView } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements'
import { Linking } from 'expo';
import TestaRefresh from '../Components/TestaRefresh'




import HeaderButton from '../Components/HeaderButton'


const styles = StyleSheet.create({
  partOne: {
    height: '30%',
    textAlign: 'center'
  },
  partTwo: {
    height:'40%'
  },
  radEtt: {
    fontFamily: 'avenir-roman',
    textAlign: 'center',
    fontSize:20,
    padding:50,
    paddingBottom:0
  },
  radTva: {
    fontFamily: 'avenir-roman',
    textAlign: 'center',
    fontSize:45,
  },
  radTre: {
    fontFamily: 'avenir-roman',
    textAlign: 'center',
    fontSize:20,
  },
  lank: {
    fontFamily: 'avenir-roman',
    textAlign: 'center',
    fontSize:20,
    textDecorationLine: 'underline'
  },
  namn: {
    fontFamily: 'avenir-roman',
    textAlign: 'center',
    fontSize:15,
  }



});




const OmOssScreen = () => {
    return (
        <SafeAreaView >

          <View style={styles.partOne}>
            <Text style={styles.radEtt}>Design och Utveckling</Text>
            <Text style={styles.radTva}>Kyrkappen</Text>

          </View>

          <View style={styles.partTwo}>
          <Text style={styles.radTre}>För support och frågor kontakta</Text>
          <TouchableHighlight onPress={() => Linking.openURL('mailto: kyrkappen@gmail.com')} >
            <Text style={styles.lank}>kyrkappen@gmail.com</Text>
    </TouchableHighlight>
          </View>

          <View>
            <Text style={styles.namn}>Version 1.0 November 2019</Text>
            <Text style={styles.namn}>Martin Lindahl </Text>
            <Text style={styles.namn}> Anton Högberg</Text>

          </View>

        </SafeAreaView>
    )
}

OmOssScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Om appen',
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
