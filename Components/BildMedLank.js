import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'


const styles = StyleSheet.create({
    col:{
        flex: 1,
         height: '33%',
    },
    centerContainer: {
      flex: 1,
      //justifyContent: 'flex-end',
      alignItems: 'center',
      margin:20
    },
    centerContainerFlexCenter: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    anslagstavlaSizeColor: {
      color: 'white',
      fontSize: 30
    },
    rubrikSizeColor: {
      color: 'white',
      fontSize: 20
    },
    rubrikSizeColor15: {
      color: 'white',
      fontSize: 15
    },
    
  });

const BildMedLank = () => {
    return (
        <View>
            <Text> bild med länk</Text>
                <View style={{height: 250}}>

                    <View style={{...styles.col}} >
                        <ImageBackground source={require('../assets/forstasida/1Kalender.png')} style={{width: '100%', height: '100%'}}>
                        <View style={styles.centerContainer}>
                            <Text style={styles.anslagstavlaSizeColor}>dfgdfgdgf</Text>
                        </View>
                        </ImageBackground>
                    </View>
                </View>
        </View>
    )
}

export default BildMedLank
