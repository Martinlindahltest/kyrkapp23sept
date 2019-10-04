import React from 'react'
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native'

export default function Tabmeny5(props) {

  const styles = StyleSheet.create({
    box:{
        flex: 1,
        backgroundColor: 'black'

    },
    img: {
      height:'100%',
      width:'100%',
      resizeMode: "contain"
    }
  });

    return (


      <View style={{flex: 1, flexDirection: 'row'}}>

<View style={styles.box}>
      <TouchableOpacity onPress={()=> props.KalenderScreenProps.navigation.navigate('KalenderGtj')}>
        <Image 
        style={styles.img}
        source={require('../assets/tab5/Gudstjanst.png')}
        /> 
      </TouchableOpacity>
    </View>

    <View style={styles.box}>
      <TouchableOpacity onPress={()=> props.KalenderScreenProps.navigation.navigate('KalenderMusik')}>
        <Image 
        style={styles.img}
        source={require('../assets/tab5/Musik.png')}
        /> 
      </TouchableOpacity>
    </View>

    <View style={styles.box}>
      <TouchableOpacity onPress={()=> props.KalenderScreenProps.navigation.navigate('KalenderBarn')}>
        <Image 
        style={styles.img}
        source={require('../assets/tab5/Barn.png')}
        /> 
      </TouchableOpacity>
    </View>



    <View style={styles.box}>
      <TouchableOpacity onPress={()=> props.KalenderScreenProps.navigation.navigate('KalenderVuxen')}>
        <Image 
        style={styles.img}
        source={require('../assets/tab5/Vuxen.png')}
        /> 
      </TouchableOpacity>
    </View>



    </View>
    )
}
