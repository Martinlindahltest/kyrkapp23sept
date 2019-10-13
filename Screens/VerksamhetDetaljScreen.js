import React from 'react'
import { Text, ScrollView } from 'react-native'



const VerksamhetDetaljScreen = (props) => {


    const {
        rubrik, 
        typ, 
        beskrivning,
        url1,
        url2,
        dag,
        tillpopular
    } = props.navigation.state.params.Aktivitet

    return (
    
        <ScrollView >
            <Text>VerksamhetDetaljScreen</Text>
            <Text>{rubrik}  </Text>
            <Text>{beskrivning}  </Text>


        </ScrollView>
        
    )
}


export default VerksamhetDetaljScreen
