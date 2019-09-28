import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';
import FetchApp from '../Components/FetchApp'

import HeaderButton from '../Components/HeaderButton'


const KalenderDetaljScreen = (props) => {

    return (
    
        <ScrollView >
            <Text>KalenderDetaljScreen</Text>
            <Text>Aktivitet: {props.navigation.state.params.Aktivitet}  </Text>

        </ScrollView>
        
    )
}


export default KalenderDetaljScreen
