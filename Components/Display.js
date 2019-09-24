import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function Display(props) {

    /*
{
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
    start-slut,
    År
} = props.data
*/






        const p = props.data

//let datum = new Date("2015-02-02").toISOString()
//console.log(datum)

        /*
<View>
    <Text>HEj från display</Text>

    
   <Text>{p.Dag} {p.Datumsiffra} {p.Månad} kl {p.startSlut}</Text>
   <Text>{p.Aktivitet}</Text>


</View>
        */ 

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
            fontSize:20
        },
        rubrikOchPlats:{
            flex: 3,
            padding: 5
        },
        rubrik:{
            fontSize: 30
        },
        text:{
            fontSize: 15
        }
      });
      





    return (
        
<View >
    <Text style={styles.datumRubrik}>måndag 8 september</Text>
    <View style={styles.box}>
        <View style={styles.klockslagContainer}>
            <Text style={styles.klockslag}>11.00</Text>
        </View>
        <View style={styles.rubrikOchPlats}>
            <Text style={styles.rubrik}>Rubrik</Text>
            <Text style={styles.text}>Text</Text>
        </View>
    </View>
</View>
           

        

    )
}
