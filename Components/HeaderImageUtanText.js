import React from 'react'
import { View,Image, StyleSheet, Text, ImageBackground } from 'react-native'

export default function HeaderImageUtanText(props) {

    const styles = StyleSheet.create({
        img: {width: '100%', height: 165, resizeMode: 'cover'},
        rubriktext: {
          fontSize: 30,
          color: 'white',
          //backgroundColor:'blue',
          padding: 10,
          fontFamily: 'avenir-roman',


        },
        rubriktextView: {
          flex: 1,
          justifyContent: 'center', 
          alignItems: 'center' ,
        }
        
      });

      //console.log(props)


      let img =          <Image 
              style={styles.img}
              source={require('../assets/Kalender17okt/kal-verk-front.jpg')}
              />

      let component = 
        <ImageBackground source={require('../assets/Kalender17okt/kal-verk-front.jpg')} style={styles.img}>
        </ImageBackground>

        if(props.screen == 'Gudstjänstkalender'){
          component = 
          <ImageBackground source={require('../assets/Kalender17okt/kal-verk-gtj.jpg')} style={styles.img}>
          </ImageBackground>        
          }
          if(props.screen == 'Musikkalender'){
            component = 
            <ImageBackground source={require('../assets/Kalender17okt/kal-verk-musik.jpg')} style={styles.img}>
            </ImageBackground>        
            }
            if(props.screen == 'Barnkalender'){
              component = 
              <ImageBackground source={require('../assets/Kalender17okt/kal-verk-barn.jpg')} style={styles.img}>
              </ImageBackground>        }
            if(props.screen == 'Ung/Vuxenkalender'){
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