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
      });
      





    return (
        
<View >
    <Text style={styles.datumRubrik}>måndag 8 september</Text>
    <View style={styles.box}>

    </View>
</View>
           

        

    )
}
