import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'




const BildMedLank = (props) => {

    let styles = StyleSheet.create({
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
        rubrik: {
          color: props.textfarg,
          fontFamily: 'avenir-roman',
          fontSize: 40
        },
        underRubrik: {
            color: props.textfarg,
            fontFamily: 'avenir-roman',
            fontSize: 14,
            textAlign: 'center'
          },
        
      });


    return (

        <View>
                <View style={{height: 220}}>

                    <View style={{...styles.col}} >
                        <ImageBackground source={props.imgUrl} style={{width: '100%', height: '100%'}}>
                        <View style={styles.centerContainer}>
                            <Text style={styles.rubrik}>{props.rubrik}</Text>
                            <Text style={styles.underRubrik}>{props.underrubrik}</Text>
                        </View>
                        </ImageBackground>
                    </View>
                </View>
        </View>
    )
}



export default BildMedLank