import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Button } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';
import BildMedText from '../Components/BildMedText'

import HeaderButton from '../Components/HeaderButton'
import FetchSenasteHandelse from '../Components/FetchSenasteHandelse'

import * as WebBrowser from 'expo-web-browser';

import audioGuideUrl from '../dbConfig/audioGuideUrl'
import blogUrl from '../dbConfig/blogUrl'

import ModalExample from '../Components/ModalExample'
import FetchSvenskaKyrkan from '../Components/FetchSvenskaKyrkan'

const styles = StyleSheet.create({
    
  });

  
  export default class AnslagstavlaScreen extends Component {
    state = {
      result: null,
    };

    startaHandelserAsync = async () => {
      let result = await WebBrowser.openBrowserAsync(blogUrl);
      this.setState({ result });
    };

    startaNyBlogAsync = async () => {
      let result = await WebBrowser.openBrowserAsync(audioGuideUrl);
      this.setState({ result });
    };


    render() {

      const {navigate} = this.props.navigation;
  
      return (
        <ScrollView>

                        <TouchableOpacity onPress={this.startaNyBlogAsync}>
                          <ImageBackground source={require('../assets/forstasida/0AnslagstavlaToppVit.jpg')} style={{width: '100%', height: 220}}>
                          </ImageBackground>
                        </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Kalender')}>
            <BildMedText imgUrl={require('../assets/forstasida/1Kalender.png')} textfarg={'black'} rubrik={'Kalender'} underrubrik={'Här kan du se vad som händer hos oss.'} />
            </TouchableOpacity>

          <TouchableOpacity onPress={this.startaHandelserAsync}>
            <BildMedText imgUrl={require('../assets/forstasida/2Blogg.png')} textfarg={'white'} rubrik={'Blogg'} underrubrik={'Här lägger vi regelbundet upp veckans bibeltexter samt video & bild från mässor konserter m.m.'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate('HittaHit')}>
          <BildMedText imgUrl={require('../assets/forstasida/3HittaHit.png')} textfarg={'black'} rubrik={'Hitta hit'} underrubrik={'Här hittar du adresser och kartor till våra kyrkor och lokaler.'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate('Verksamheter')}>
          <BildMedText imgUrl={require('../assets/forstasida/4Verksamheter.png')} textfarg={'white'} rubrik={'Verksamheter'} underrubrik={'Här hittar du info om alla våra verksamheter.'} />
          </TouchableOpacity>
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