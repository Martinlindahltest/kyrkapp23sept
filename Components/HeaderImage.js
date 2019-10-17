import React from 'react'
import { View,Image, StyleSheet, Text } from 'react-native'

export default function HeaderImage(props) {

    const styles = StyleSheet.create({
        img: {
          flex:1,
          height: 200,
          width: '100%',
          resizeMode: "cover"
        },
        tabContainer: {
          height: 70 
        }
      });

      console.log(props)

if(props.screen == 'Kalender'){
    return (
        <View>
                    <Text>{props.screen}</Text>

         <Image 
              style={styles.img}
              source={require('../assets/Kalender17okt/kal-verk-front.jpg')}
              />
        </View>
            )
}
else{
    return (
        <View>
        </View>
            )
}

}

/**
 * <Image 
      style={styles.img}
      source={require(props.image)}
      />
 */