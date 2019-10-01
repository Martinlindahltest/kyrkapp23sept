import React from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'

export default function Tabmeny5(props) {

  const styles = StyleSheet.create({
    box:{
        flex: 1,
        borderTopColor: '#000000',
        borderStyle: "solid",
        borderWidth:1
    },
    img: {
      flex:1,
      height: 200,
      width: '100%',
      resizeMode: "cover"
    }
  });

    return (


      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.box}>
          <Image 
        style={styles.img}
        source={require('../assets/tab5/Barn.png')}
        />        
      </View>

      <View style={styles.box}>
      <Button title="Gtj" onPress={() => props.KalenderScreenProps.navigation.navigate('KalenderGtj')} />

          <Image 
        style={styles.img}
        source={require('../assets/tab5/Gudstjanst.png')}
        />        
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
