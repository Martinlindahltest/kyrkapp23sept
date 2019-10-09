import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

export default class HändelserScreen extends Component {
  state = {
    result: null,
  };

  render() {
    this._handlePressButtonAsync()
    return (
      <View>
               <Button
          style={styles.paragraph}
          title="Open WebBrowser"
          onPress={this._handlePressButtonAsync}
        />


        <Text>{this.state.result && JSON.stringify(this.state.result)}</Text>
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