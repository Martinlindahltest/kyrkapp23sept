import React from 'react'
import { Text, ScrollView } from 'react-native'
import HeaderImage from '../Components/HeaderImage'



const KalenderDetaljScreen = (props) => {

    //console.log('props.navigation.state.params.propsData i kalenderdetalj', props.navigation.state.params.propsData)

    let {
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
    _id
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

    return (

    
        <ScrollView >
                        {headerImage}

           <Text>Verksamhetstyp: {Verksamhetstyp}  </Text>
            <Text>Aktivitet: {Aktivitet}  </Text>


            <Text>Lokal: {Lokal}  </Text>
            <Text>Tid: {startSlut}  </Text>
            <Text>Präst: {Präst}  </Text>
            <Text>Musiker: {Musiker}  </Text>


        </ScrollView>
        
    )
}


export default KalenderDetaljScreen
