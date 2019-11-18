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


const styles = kalenderVerksamhetStyles


    return (

<TouchableOpacity onPress={() => props.navRef.navigation.navigate('KalenderDetalj', {propsData: props.data}) }>
    <View >
        <Text style={styles.datumRubrik}>{Dag} {props.objektetsDag} / {props.objektetsMånad} {Månad}</Text>
        <View style={styles.box}>
            <Vir och verksamheterew style={styles.klockslagContainer}>
                <Text style={styles.klockslag}>{starttid}</Text>
            </View>
            <View style={styles.rubrikOchPlats}>
                <Text style={styles.rubrik}>{Aktivitet}</Text>
                <Text style={styles.text}>{Lokal}</Text>


             </View>
             <View style={styles.pilContainer}>
                <Image style={{width: 15, height: 15}} source={require('../assets/Kalender17okt/pil.png')} />
            </View>
        </View>


    </View>
</TouchableOpacity>

        

    )
}
