import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';

import HeaderButton from '../Components/HeaderButton'
import FetchSenasteHandelse from '../Components/FetchSenasteHandelse'

import * as WebBrowser from 'expo-web-browser';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import knapp from '../Styles/knapp'




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
        <View>
          <Text>ny anslagstavla</Text>
        </View>
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

