import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';


import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';


import HeaderButton from '../Components/HeaderButton'

import { WebView } from 'react-native-webview';


export default class HändelserScreen extends Component {
  constructor(props){
    super(props);
  state = {
    result: 'ingenting',
  };
}

  render() {
    return (
      <View>
               <Button
          style={styles.paragraph}
          title="Se senaste händelser"
          onPress={this._handlePressButtonAsync}
        />

<Button
        onPress={() => this.props.navigation.navigate('Anslagstavla')}
        title="Tillbaka till Anslagstavlan"
      />
      </View>
    );
  }



  _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('https://tullinge.digitalindahl.com/');
    this.setState({ result });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});