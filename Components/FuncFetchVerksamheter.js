import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'

export default function FuncFetchVerksamheter(props) {
 
    const [data, setData] = useState({
    });
    
    useEffect(async () => {
      const result = await fetch('https://jsontestmartin.s3.eu-north-1.amazonaws.com/verksamheterMedId30sept.json');
    });
    setData(result);
     

    console.log('data från funcFetch', data)
    
    return (
        <View>
            <Text>jag är funcfetch</Text>
    </View>

    )
}
