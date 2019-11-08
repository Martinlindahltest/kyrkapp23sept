
import React from 'react'
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native'

export default function TabmenyText() {

  const styles = StyleSheet.create({
    box:{
        flex: 1,
        backgroundColor: 'black'

    },
    textUnderBild: {
      color: 'white',
      textAlign: 'center',
      fontFamily: 'avenir-roman'

    }

  });

    return (


      <View style={{flex: 1, flexDirection: 'row'}}>

<View style={styles.box}>
      <Text style={styles.textUnderBild}>Alla</Text>
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