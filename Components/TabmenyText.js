
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
      fontFamily: 'avenir-roman',
      fontSize: 12,
      marginTop: -10
    }

  });

    return (


      <View style={{flex: 1, flexDirection: 'row'}}>

<View style={styles.box}>
      <Text style={styles.textUnderBild}>Alla</Text>
    </View>

<View style={styles.box}>
<Text style={styles.textUnderBild}>Gudstjänst</Text>

    </View>

    <View style={styles.box}>
    <Text style={styles.textUnderBild}>Musik</Text>

    </View>

    <View style={styles.box}>
    <Text style={styles.textUnderBild}>Barn</Text>

    </View>



    <View style={styles.box}>
    <Text style={styles.textUnderBild}>Ung/Vuxen</Text>

    </View>





    </View>
    )
}