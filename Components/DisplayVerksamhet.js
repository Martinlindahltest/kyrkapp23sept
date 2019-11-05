import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import kalenderVerksamhetStyles from '../Styles/stylesKalenderVerksamhet'




export default function DisplayVerksamhet(props) {
    /**

    let farg
    //console.log('props i displayverksamhet', props.data.acf.typ)
    if(props.data.acf.typ == 'gtj'){
        farg = 'red'
    }
    if(props.data.acf.typ == 'musik'){
        farg = 'green'
    }
    if(props.data.acf.typ == 'ungVux'){
        farg = 'blue'
    }
    if(props.data.acf.typ == 'barn'){
        farg = 'yellow'
    }
     */
    /** 

       const styles = StyleSheet.create({
        datumRubrik: {
          fontWeight: "bold",
          backgroundColor: '#808080',
          padding: 10,
          borderTopColor: '#000000',
          borderStyle: "solid",
          borderWidth:1
        },
        box:{
            flex: 1,
            flexDirection: 'row',
            margin: 5
        },
        klockslagContainer:{
            flex: 3
        },
        klockslag:{
            //paddingTop:10,
            fontSize:15,
            //fontWeight: 'bold',
            justifyContent: 'center',
            alignItems: 'center',
    
        },
        rubrikOchPlats:{
            flex: 5,
            padding: 5,
            borderLeftWidth: 2,
            borderLeftColor: farg


        },
        rubrik:{
            fontSize: 20
        },
        text:{
            fontSize: 15
        },        
      });
      */
      
     const styles = kalenderVerksamhetStyles

      /**
            "acf": {
            "rubrik": "Barnkören",
            "typ": "musik",
            "beskrivning": "Plats: Tullinge gård\r\nTid: Torsdagar, 17.15-18.00\r\nKörledare: Camilla Helander\r\n\r\nSånglek för barn 4-5 år.\r\n\r\nFör mer info, kontakta Camilla Helander.",
            "url1": "",
            "url2": "",
            "dag": "4",
            "tillpopular": false,
            "plats": "Tullinge gård"
        },

              const {

    } = props.data.acf
       */

//console.log('DV', props.data.acf)


const {
    rubrik, 
    typ, 
    beskrivning,
    url1,
    url2,
    dag,
    tillpopular,
    plats, 
    tid
} = props.data.acf


//console.log('props DV', props.data.id)

    return (

                <TouchableOpacity key={props.data.id} onPress={() => props.navRef.navigation.navigate('VerksamheterDetalj', {Aktivitet: props.data.acf}) }>
                    <View >

                
                        
                        <View style={styles.box}>
                        <View style={styles.rubrikOchPlats}>
                                <Text style={styles.rubrik}>{rubrik}</Text>
                                <Text style={styles.text} >{plats}  </Text>


                            </View>
                            <View style={styles.klockslagContainer}>
                                <Text> => </Text>
                            </View>

                        </View>

                    </View>
                    <View
                                    style={{
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 1,
                                    }}
                                    />
                </TouchableOpacity>
        

    )
}
