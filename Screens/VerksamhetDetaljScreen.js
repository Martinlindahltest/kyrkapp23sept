import React from 'react'
import { Text, ScrollView, Button, Linking } from 'react-native'
import HeaderImage from '../Components/HeaderImage'



const VerksamhetDetaljScreen = (props) => {


    let {
        rubrik, 
        typ, 
        beskrivning,
        text_pa_knapp_1,
        url1,
        text_pa_knapp_2,
        url2,
        dag,
        tillpopular
    } = props.navigation.state.params.Aktivitet

    //console.log('props.navigation.state', props.navigation.state.key)

    let knapp1 = []
    let knapp2 = []

    if(url1){
        //url1 = url1.toString()
        knapp1.push(<Button title={text_pa_knapp_1} onPress={ ()=>{ Linking.openURL(url1)}} key={1} />)
    }

    if(url2){
        //url1 = url1.toString()
        knapp2.push(<Button title={text_pa_knapp_2} onPress={ ()=>{ Linking.openURL(url2)}} key={2}/>)
    }


    return (
    
        <ScrollView >
            <Text>VerksamhetDetaljScreen</Text>
            <HeaderImage screen={'Gudtjänst'} />

            <Text>{rubrik}  </Text>
            <Text>{beskrivning}  </Text>
            {knapp1}
            {knapp2}

        </ScrollView>
        
    )
}


export default VerksamhetDetaljScreen
