import React from 'react'
import { View,Image, StyleSheet, Text, ImageBackground } from 'react-native'

export default function HeaderImage(props) {

    const styles = StyleSheet.create({
        img: {width: '100%', height: 200, resizeMode: 'cover'},
        
      });

      console.log(props)


      let img =          <Image 
              style={styles.img}
              source={require('../assets/Kalender17okt/kal-verk-front.jpg')}
              />

      let component = 
        <ImageBackground source={require('../assets/Kalender17okt/kal-verk-front.jpg')} style={styles.img}>
        </ImageBackground>

        if(props.screen == 'Gudtjänst'){
          component = 
          <ImageBackground source={require('../assets/Kalender17okt/kal-verk-gtj.jpg')} style={styles.img}>
          </ImageBackground>        
          }
          if(props.screen == 'Musik'){
            component = 
            <ImageBackground source={require('../assets/Kalender17okt/kal-verk-musik.jpg')} style={styles.img}>
            </ImageBackground>        
            }
            if(props.screen == 'Barn'){
              component = 
              <ImageBackground source={require('../assets/Kalender17okt/kal-verk-barn.jpg')} style={styles.img}>
              </ImageBackground>        }
            if(props.screen == 'Ung/Vuxen'){
              component = 
              <ImageBackground source={require('../assets/Kalender17okt/kal-verk-ungVux.jpg')} style={styles.img}>
              </ImageBackground>        }


    return (
      <View>
        {component}
      </View>
      ) 
  
}

/**
 * <Image 
      style={styles.img}
      source={require(props.image)}
      />
 */