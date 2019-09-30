import React from 'react'
import { View, Text } from 'react-native'


export default function DisplayVerksamhet(props) {

    /*
    Datamodell:

{
   "_id": "ObjectId(\"5d91bc3e648baf04ce7c0861\")",
   "Veckodag": "Måndag",
   "Tid": "09.30-12.00",
   "Titel": "Tullinge Kammarkör",
   "Personal": "Körledare, Camilla Helander",
   "Beskrivning": "Terminstart v.35. En blandad kör med blandad repertoar som medverkar vid gudstjänster och konserter. Provsjungning krävs.",
   "Kategori": "Musik",
   "Plats": "",
   "FIELD9": "",
   "FIELD10": "",
   "FIELD11": "",
   "FIELD12": ""
 },    */

    let {
        _id,
        Veckodag,
        Tid,
        Titel,
        Personal,
        Beskrivning,
        Kategori,
        Plats
    } = props.data


console.log('från props verksamheter', props.data)



    return (
<View key={_id}>
    <Text>Hej från display Verksamhet</Text>
    <Text>{Titel}</Text>
    <Text>{Tid}</Text>
    <Text>{Beskrivning}</Text>
    <Text>{Personal}</Text>
</View>
    )
}
