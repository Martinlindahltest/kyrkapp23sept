import React from 'react'
import { Text, ScrollView, ImageBackground, View, StyleSheet } from 'react-native'
import HeaderImageUtanText from '../Components/HeaderImageUtanText'



const KalenderDetaljScreen = (props) => {

    //console.log('props.navigation.state.params.propsData i kalenderdetalj', props.navigation.state.params.propsData)
    let {
        _id,
        Verksamhetstyp,
        Datum,
        Dag,
        Aktivitet,
        startSlut,
        Lokal,
        Präst,
        Musiker,
        Vaktmästare,
        Personal,
        InternNotering
    } = props.navigation.state.params.propsData

    const styles = StyleSheet.create({
        rubrik:{
            fontSize: 30,
            padding:3,
            paddingBottom:20,
            paddingTop: 20

        },
        text:{
            fontSize: 20,
            padding:3

        },
        ViewRuntText:{
            padding:30
        }        
      });


    let headerImage = <HeaderImageUtanText screen={'Ung/Vuxenkalender'} />

    if(Verksamhetstyp == 'ungVux') {
         headerImage = <HeaderImageUtanText screen={'Ung/Vuxenkalender'} />
    }
    if(Verksamhetstyp == 'Gtj') {
        headerImage = <HeaderImageUtanText screen={'Gudstjänstkalender'} />
    }
    if(Verksamhetstyp == 'Musik') {
        headerImage = <HeaderImageUtanText screen={'Musikkalender'} />
    }
    if(Verksamhetstyp == 'Barn') {
        headerImage = <HeaderImageUtanText screen={'Barnkalender'} />
    }



    let prastPlaceholder =<View></View>
    if(Präst.length > 0){
        prastPlaceholder = <Text style={styles.text}>Präst: {Präst}  </Text>

    }

    let musikerPlaceholder =<View></View>
    if(Musiker.length > 0){
        musikerPlaceholder = <Text style={styles.text}>Musiker: {Musiker}  </Text>
    }

    
    let vaktmastarePlaceholder =<View></View>
    if(Vaktmästare.length > 0){
        vaktmastarePlaceholder = <Text style={styles.text}>Vaktmästare: {Vaktmästare}  </Text>

    }

    
    let personalPlaceholder =<View></View>
    if(Personal.length > 0){
        personalPlaceholder = <Text style={styles.text}>Personal: {Personal}  </Text>

    }




    return (

<ImageBackground source={require('../assets/Kalender17okt/bakgrundSten17okt.jpg')} style={{width: '100%', height: '100%'}}>

<ScrollView >
                {headerImage}

    <View style={styles.ViewRuntText}>
        <Text style={styles.rubrik}>{Aktivitet}</Text>
        <Text style={styles.text}>Plats: {Lokal}  </Text>
        <Text style={styles.text}>Tid: {startSlut}  </Text>
        {prastPlaceholder}
        {musikerPlaceholder}
        {vaktmastarePlaceholder}
        {personalPlaceholder}
        <Text></Text>

        <Text style={styles.text}>{InternNotering}</Text>
    </View>



</ScrollView>
</ImageBackground>

    )
}

export default KalenderDetaljScreen