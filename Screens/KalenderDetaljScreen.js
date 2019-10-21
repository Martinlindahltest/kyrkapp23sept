import React from 'react'
import { Text, ScrollView, ImageBackground, View } from 'react-native'
import HeaderImage from '../Components/HeaderImage'



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


    let headerImage = <HeaderImage screen={'Ung/Vuxen'} />

    if(Verksamhetstyp == 'ungVux') {
         headerImage = <HeaderImage screen={'Ung/Vuxen'} />
    }
    if(Verksamhetstyp == 'Gtj') {
        headerImage = <HeaderImage screen={'Gudtjänst'} />
    }
    if(Verksamhetstyp == 'Musik') {
        headerImage = <HeaderImage screen={'Musik'} />
    }
    if(Verksamhetstyp == 'Barn') {
        headerImage = <HeaderImage screen={'Barn'} />
    }



    let prastPlaceholder =<Text>Ingen präst </Text>
    if(Präst.length > 0){
        prastPlaceholder = <Text>Präst: {Präst}  </Text>

    }

    let musikerPlaceholder =<Text>Ingen Musiker </Text>
    if(Musiker.length > 0){
        musikerPlaceholder = <Text>Musiker: {Musiker}  </Text>
    }

    
    let vaktmastarePlaceholder =<Text>Ingen vaktmastare </Text>
    if(Vaktmästare.length > 0){
        vaktmastarePlaceholder = <Text>Vaktmästare: {Vaktmästare}  </Text>

    }

    
    let personalPlaceholder =<Text>Ingen personal </Text>
    if(Personal.length > 0){
        personalPlaceholder = <Text>Personal: {Personal}  </Text>

    }
                            /** 

*/
    return (

<ImageBackground source={require('../assets/Kalender17okt/bakgrundSten17okt.jpg')} style={{width: '100%', height: '100%'}}>

<ScrollView >
                {headerImage}



    <Text>Plats: {Lokal}  </Text>
    <Text>Tid: {startSlut}  </Text>
    {prastPlaceholder}
    {musikerPlaceholder}
    {vaktmastarePlaceholder}
    {personalPlaceholder}




</ScrollView>
</ImageBackground>

    )
}

export default KalenderDetaljScreen