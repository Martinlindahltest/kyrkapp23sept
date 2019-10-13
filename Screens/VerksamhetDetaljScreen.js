import React from 'react'
import { Text, ScrollView } from 'react-native'



const VerksamhetDetaljScreen = (props) => {

    return (
    
        <ScrollView >
            <Text>VerksamhetDetaljScreen</Text>
            <Text>Aktivitet: {props.navigation.state.params.Aktivitet}  </Text>

        </ScrollView>
        
    )
}


export default VerksamhetDetaljScreen
