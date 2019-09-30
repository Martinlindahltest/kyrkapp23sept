import React from 'react'
import { Text, ScrollView } from 'react-native'



const KalenderDetaljScreen = (props) => {

    return (
    
        <ScrollView >
            <Text>KalenderDetaljScreen</Text>
            <Text>Aktivitet: {props.navigation.state.params.Aktivitet}  </Text>

        </ScrollView>
        
    )
}


export default KalenderDetaljScreen
