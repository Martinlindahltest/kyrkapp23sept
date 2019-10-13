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
      
      //console.log(props.navRef.navigation.navigate)

    return (

<TouchableOpacity onPress={() => props.navRef.navigation.navigate('KalenderDetalj', {Aktivitet: Aktivitet}) }>
    <View >
        <Text style={styles.datumRubrik}>Dag Datumsiffra Månad</Text>

        <View style={styles.box}>
            <Text>jajaja</Text>
        </View>
        {/* 
        <View style={styles.box}>
            <View style={styles.klockslagContainer}>
                <Text style={styles.klockslag}>startSlut</Text>
            </View>
            <View style={styles.rubrikOchPlats}>
                <Text style={styles.rubrik}>Aktivitet</Text>
                <Text style={styles.text}>Lokal, Verksamhetstyp  =></Text>

             </View>
        </View>
        */}

    </View>
</TouchableOpacity>

        

    )
}
