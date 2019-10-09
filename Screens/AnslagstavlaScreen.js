import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';

import HeaderButton from '../Components/HeaderButton'
import FetchSenasteHandelse from '../Components/FetchSenasteHandelse'

import * as WebBrowser from 'expo-web-browser';



const styles = StyleSheet.create({
    col:{
        flex: 1,
         height: '33%',
    },
    centerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });

  
  export default class AnslagstavlaScreen extends Component {
    state = {
      result: null,
    };

    startaHandelserAsync = async () => {
      let result = await WebBrowser.openBrowserAsync('https://tullinge.digitalindahl.com/');
      this.setState({ result });
    };

    startaVerksamheterAsync = async () => {
      let result = await WebBrowser.openBrowserAsync('https://tullinge.digitalindahl.com/verksamheter');
      this.setState({ result });
    };

    render(props) {
      return (
        <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{...styles.col}} >
            <ImageBackground source={require('../assets/Anslagstavla/AnslagstavlaTopp.jpg')} style={{width: '100%', height: '100%'}}>
            </ImageBackground>
        </View>

        <View style={{...styles.col, backgroundColor: 'skyblue'}} >

        <View style={{flex: 1, flexDirection: 'row'}}>

                <View style={{flex: 1, flexDirection: 'column'}}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Kalender')}>

                    <ImageBackground source={require('../assets/Anslagstavla/AnslagstavlaKalender.jpg')} style={{width: '100%', height: '100%'}}>
                    </ImageBackground>

                </TouchableOpacity>

                </View>


                <View style={{flex: 1, flexDirection: 'column'}}>
                <TouchableOpacity onPress={this.startaVerksamheterAsync}>

                      <ImageBackground source={require('../assets/Anslagstavla/AnslagstavlaVerksamheter.jpg')} style={{width: '100%', height: '100%'}}>
                      </ImageBackground>

                    </TouchableOpacity>
                </View>
            </View>
        </View>

        <View style={{...styles.col , height: '34%', backgroundColor: 'steelblue'}} >
          <TouchableOpacity onPress={this.startaHandelserAsync}>

            <ImageBackground source={require('../assets/Anslagstavla/AnslagstavlaVerksamheter.jpg')} style={{width: '100%', height: '100%'}}>
              <View style={styles.centerContainer}>
                <FetchSenasteHandelse />
              </View>
            </ImageBackground>
          </TouchableOpacity>
            
        </View>
      </View>
      )
    }
  }
  




AnslagstavlaScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Anslagstavla',
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

