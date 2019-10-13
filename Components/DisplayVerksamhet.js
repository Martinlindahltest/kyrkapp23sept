import React from 'react'
import { View, Text, Image } from 'react-native'


export default function DisplayVerksamhet(props) {

    /*
    Datamodell:

[
    {
        "id": 545,
        "date": "2019-10-13T07:43:04",
        "date_gmt": "2019-10-13T07:43:04",
        "guid": {
            "rendered": "http://tullinge.digitalindahl.com/?post_type=apiverksamhet&#038;p=545"
        },
        "modified": "2019-10-13T07:44:48",
        "modified_gmt": "2019-10-13T07:44:48",
        "slug": "auto-draft",
        "status": "publish",
        "type": "apiverksamhet",
        "link": "https://tullinge.digitalindahl.com/apiverksamhet/auto-draft/",
        "featured_media": 0,
        "template": "",
        "acf": {
            "rubrik": "Dop & Vigsel",
            "typ": "gtj",
            "beskrivning": "Plats: Tullinge Kyrka\r\nDag: Lördag\r\nTid 11.00 12.15 13.30 14.45\r\nPräst: Eva\r\nMusiker: Camilla\r\n\r\nVi har dop & vigslar i tullinge kyrka\r\n",
            "url1": "https://www.svenskakyrkan.se/botkyrka/dop",
            "url2": "https://www.svenskakyrkan.se/botkyrka/boka-och-planera-vigsel",
            "dag": "måndag",
            "tillpopular": true
        },
        "_links": {
            "self": [
                {
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/apiverksamhet/545"
                }
            ],
            "collection": [
                {
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/apiverksamhet"
                }
            ],
            "about": [
                {
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/types/apiverksamhet"
                }
            ],
            "wp:attachment": [
                {
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/media?parent=545"
                }
            ],
            "curies": [
                {
                    "name": "wp",
                    "href": "https://api.w.org/{rel}",
                    "templated": true
                }
            ]
        }
    }
]   */

let {
  rubrik, 
  typ, 
  beskrivning, 
  url1, 
  url2, 
  dag,
  tillpopular 

} = props.data.acf



console.log('från props verksamheter', props.data.acf.bild)



    return (
<View>

        <Text>
          {rubrik}
        </Text>
        
        <Text>
          {beskrivning}
        </Text>

        <Text>
          {dag}
        </Text>
</View>
    )
}
