import React from 'react'
import { View, Text } from 'react-native'


export default function DisplayVerksamhet(props) {

    /*
    Datamodell:

    {
   "1": 2,
   "VeckodagNr": 1,
   "Veckodag": "Måndag",
   "Tid": "09.30-12.00",
   "Titel": "Tullinge Kammarkör",
   "Personal": "Körledare: Camilla Helander",
   "Beskrivning": "Terminstart v.35. En blandad kör med blandad repertoar som medverkar vid gudstjänster och konserter. Provsjungning krävs.",
   "Kategori": "Musik"
 },
    */

    let {
        VeckodagNr,
        Veckodag,
        Tid,
        Titel,
        Personal,
        Beskrivning,
        Kategori
    } = props.data


//console.log('från props verksamheter', props.data)



    return (
<View>
    <Text>Hej från display Verksamhet</Text>
    <Text>{Titel}</Text>
    <Text>{Tid}</Text>
    <Text>{Beskrivning}</Text>
    <Text>{Personal}</Text>



</View>
    )
}
