import React from 'react'
import { View, Text } from 'react-native'


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





    return (
<View>
    <Text>{p.Dag} {p.Datumsiffra} {p.Månad} kl {p.startSlut}</Text>
    <Text>{p.Aktivitet}</Text>
</View>
    )
}
