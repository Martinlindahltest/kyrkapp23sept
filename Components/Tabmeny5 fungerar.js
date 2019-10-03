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
//       <Button title="Gtj" onPress={() => props.KalenderScreenProps.navigation.navigate('KalenderGtj')} />

    return (


      <View style={{flex: 1, flexDirection: 'row'}}>

        <View style={styles.box}>
          <Image 
        style={styles.img}
        source={require('../assets/tab5/Barn.png')}
        />        
      </View>

      <View style={styles.box}>


              <TouchableOpacity onPress={()=> props.KalenderScreenProps.navigation.navigate('KalenderGtj')}>
  <Image 
          style={styles.img}
        source={require('../assets/tab5/Gudstjanst.png')}
        /> 
  </TouchableOpacity>
       
      </View>

      <View style={styles.box}>
          <Image 
        style={styles.img}
        source={require('../assets/tab5/Vuxen.png')}
        />        
      </View>

      <View style={styles.box}>
          <Image 
        style={styles.img}
        source={require('../assets/tab5/Musik.png')}
        />        
      </View>

    </View>
    )
}
