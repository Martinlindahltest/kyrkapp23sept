import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import kalenderVerksamhetStyles from '../Styles/stylesKalenderVerksamhet'


export default function Display(props) {

    
const {
    Aktivitet,
    Ansvgrupp,
    Bokningstyp,
    Dag,
    Datum,
    Datumsiffra,
    Kyrkoåret,
    Lokal,
    Musiker,
    Månad,
    Präst,
    Vaktm,
    Vecka,
    Verksamhetstyp,
    förberedelse,
    medverkande,
    noteringar,
    År,
    startSlut,
    _id, 
    starttid
} = props.data



/*


let farg
//console.log('props i displayverksamhet', props.data.acf.typ)
if(Verksamhetstyp == 'Gtj'){
    farg = 'red'
}
if(Verksamhetstyp == 'Musik'){
    farg = 'green'
}
if(Verksamhetstyp == 'Vuxen'){
    farg = 'blue'
}
if(Verksamhetstyp == 'Barn'){
    farg = 'yellow'
}

*/
const styles = kalenderVerksamhetStyles

/*
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
      //console.log(props.navRef.navigation.navigate)

    return (

<TouchableOpacity onPress={() => props.navRef.navigation.navigate('KalenderDetalj', {propsData: props.data}) }>
    <View >
        <Text style={styles.datumRubrik}>{Dag} {props.objektetsDag} / {props.objektetsMånad} {Månad}</Text>
        <View style={styles.box}>
            <View style={styles.klockslagContainer}>
                <Text style={styles.klockslag}>{starttid}</Text>
            </View>
            <View style={styles.rubrikOchPlats}>
                <Text style={styles.rubrik}>{Aktivitet}</Text>
                <Text style={styles.text}>{Lokal}  =></Text>


             </View>
        </View>


    </View>
</TouchableOpacity>

        

    )
}
