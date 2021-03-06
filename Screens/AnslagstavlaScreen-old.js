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
    col:{
        flex: 1,
         height: '33%',
    },
    centerContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      margin:20
    },
    centerContainerFlexCenter: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    anslagstavlaSizeColor: {
      color: 'white',
      fontSize: 30
    },
    rubrikSizeColor: {
      color: 'white',
      fontSize: 20
    },
    rubrikSizeColor15: {
      color: 'white',
      fontSize: 15
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

    startaNyBlogAsync = async () => {
      let result = await WebBrowser.openBrowserAsync('https://tullingenyblog.digitalindahl.com/');
      this.setState({ result });
    };

    render(props) {
      return (
        <View style={{flex: 1, flexDirection: 'column'}}>

        <View style={{...styles.col}} >
            <ImageBackground source={require('../assets/Anslagstavla/AnslagstavlaTopp.jpg')} style={{width: '100%', height: '100%'}}>
              <View style={styles.centerContainer}>
                <Text style={styles.anslagstavlaSizeColor}></Text>
              </View>
            </ImageBackground>
        </View>



<View style={{...styles.col , height: '34%', backgroundColor: 'steelblue'}} >
          <TouchableOpacity onPress={this.startaNyBlogAsync}>

            <ImageBackground source={require('../assets/Anslagstavla/kommande15okt.jpg')} style={{width: '100%', height: '100%'}}>

              <View style={styles.centerContainer} >
                <View style={knapp.helaKnappen}>
                  <Text style={styles.rubrikSizeColor}>Detta händer i veckan:</Text>
                  <Text style={styles.rubrikSizeColor15}>Klicka här för mer info om vad som häder hos oss denna vecka</Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
            
        </View>

        {
          //kopia ovan
        }
        <View style={{...styles.col , height: '34%', backgroundColor: 'steelblue'}} >
          <TouchableOpacity onPress={this.startaHandelserAsync}>

            <ImageBackground source={require('../assets/Anslagstavla/handelser15okt.jpg')} style={{width: '100%', height: '100%'}}>
              <View style={styles.centerContainer} >
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
      headerTitle: 'Förstasida',
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

