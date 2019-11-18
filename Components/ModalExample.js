import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, StyleSheet } from 'react-native';

export default class ModalExample extends Component {
  state = {
    modalVisible: true,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  

  render() {

    const styles = StyleSheet.create({

        helaModalen: {
            marginTop: 80,
            textAlign: 'center'
        },
        stang: {
            backgroundColor: 'green'
        }
      });

    return (
      <View style={styles.helaModalen}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ marginTop: 82 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={styles.stang}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}