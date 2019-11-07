import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';
import BildMedLank from '../Components/BildMedLank'

import HeaderButton from '../Components/HeaderButton'
import FetchSenasteHandelse from '../Components/FetchSenasteHandelse'

import * as WebBrowser from 'expo-web-browser';




const styles = StyleSheet.create({
    
  });

  
  export default class AnslagstavlaScreen extends Component {
    state = {
      result: null,
    };

    startaHandelserAsync = async () => {
      let result = await WebBrowser.openBrowserAsync('https://tullinge.digitalindahl.com/');
      this.setState({ result });
    };

    startaNyBlogAsync = async () => {
      let result = await WebBrowser.openBrowserAsync('https://tullingenyblog.digitalindahl.com/');
      this.setState({ result });
    };

    render() {
      return (
        <ScrollView>
          <Text>ny anslagstavla</Text>
          <BildMedLank />
        </ScrollView>
      )
    }
  }
  




AnslagstavlaScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Tullinge kyrka',
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

