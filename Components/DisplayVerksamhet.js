import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'



export default function DisplayVerksamhet(props) {

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
            flexDirection: 'row'
        },
        klockslagContainer:{
            flex: 1
        },
        klockslag:{
            padding:15,
            fontSize:10
        },
        rubrikOchPlats:{
            flex: 3,
            padding: 5
        },
        rubrik:{
            fontSize: 20
        },
        text:{
            fontSize: 15
        }
      });
      

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
    plats
} = props.data.acf

    return (

<TouchableOpacity onPress={() => props.navRef.navigation.navigate('VerksamheterDetalj', {Aktivitet: props.data.acf}) }>
    <View >

 
         
        <View style={styles.box}>
            <View style={styles.klockslagContainer}>
                <Text style={styles.klockslag}></Text>
            </View>
            <View style={styles.rubrikOchPlats}>
                <Text style={styles.rubrik}>{rubrik}</Text>
                <Text style={styles.text} >{plats}  =></Text>


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
