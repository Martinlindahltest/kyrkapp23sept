
import React from 'react'
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native'

export default function TabmenyText(props) {

  const styles = StyleSheet.create({
    box:{
        flex: 1,
        backgroundColor: 'black'

    },
    textUnderBild: {
      color: 'green',
      textAlign: 'center',
      fontFamily:'avenir-roman',
      fontSize: 14
    }

  });


    return (


      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text>jfjfjfjf</Text>

        <View style={styles.box}>
            <Text style={styles.textUnderBild}>alla</Text>
        </View>

        <View style={styles.box}>
            <Text style={styles.textUnderBild}>gudtjänst</Text>
        </View>

        <View style={styles.box}>
            <Text style={styles.textUnderBild}>musik</Text>
        </View>

        <View style={styles.box}>
            <Text style={styles.textUnderBild}>barn</Text>
        </View>

        <View style={styles.box}>
            <Text style={styles.textUnderBild}>ung/vuxen</Text>
        </View>

    </View>
    )
}
