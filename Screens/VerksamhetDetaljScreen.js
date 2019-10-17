import React from 'react'
import { Text, ScrollView, Button, Linking } from 'react-native'



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

    console.log('props.navigation.state.params', props.navigation.state.params)

    let knapp1 = []
    let knapp2 = []

    if(url1){
        //url1 = url1.toString()
        knapp1.push(<Button title={text_pa_knapp_1} onPress={ ()=>{ Linking.openURL(url1)}} />)
    }

    if(url2){
        //url1 = url1.toString()
        knapp2.push(<Button title={text_pa_knapp_2} onPress={ ()=>{ Linking.openURL(url2)}} />)
    }

    return (
    
        <ScrollView >
            <Text>VerksamhetDetaljScreen</Text>
            <Text>{rubrik}  </Text>
            <Text>{beskrivning}  </Text>
            {knapp1}
            {knapp2}

        </ScrollView>
        
    )
}


export default VerksamhetDetaljScreen
