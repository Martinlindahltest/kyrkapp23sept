import React from 'react'
import { View, Text, Button } from 'react-native'

const CatogeriesScreen = (props) => {
    return (
        <View>
            <Text>CatogeriesScreen</Text>
            <Button title="go to meals" onPress={ () => { 
                props.navigation.navigate({routeName: 'CatogeryMeals'})
            }} />
        </View>
    )
}

export default CatogeriesScreen
