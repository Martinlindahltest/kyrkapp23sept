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
            "rubrik": "Dop & Vigsel",
            "typ": "gtj",
            "beskrivning": "Plats: Tullinge Kyrka\r\nDag: Lördag\r\nTid 11.00 12.15 13.30 14.45\r\nPräst: Eva\r\nMusiker: Camilla\r\n\r\nVi har dop & vigslar i tullinge kyrka\r\n",
            "url1": "https://www.svenskakyrkan.se/botkyrka/dop",
            "url2": "https://www.svenskakyrkan.se/botkyrka/boka-och-planera-vigsel",
            "dag": "måndag",
            "tillpopular": true
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
    tillpopular
} = props.data.acf

    return (

<TouchableOpacity onPress={() => props.navRef.navigation.navigate('VerksamheterDetalj', {Aktivitet: props.data.acf}) }>
    <View >
        <Text style={styles.datumRubrik}>{dag}</Text>

 
         
        <View style={styles.box}>
            <View style={styles.klockslagContainer}>
                <Text style={styles.klockslag}></Text>
            </View>
            <View style={styles.rubrikOchPlats}>
                <Text style={styles.rubrik}>{rubrik}</Text>
                <Text style={styles.text}>  =></Text>

             </View>
        </View>

    </View>
</TouchableOpacity>

        

    )
}
