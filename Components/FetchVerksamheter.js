import React, { Component } from 'react';
import DisplayVerksamhet from './DisplayVerksamhet'
import { View, Text, StyleSheet } from 'react-native'


export default class FetchVerksamheter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }


        this.objectToJsx = this.objectToJsx.bind(this);

    }

    

    componentDidMount() {

        const jsonURL = 'https://tullinge.digitalindahl.com/wp-json/wp/v2/apiverksamhet'
        fetch(jsonURL)
        .then(response => {
          return response.json();
        })
        .then(tullingeJson => {
            //console.log('setstate i fetchVerksamheter')

          this.setState({
            tullingeJson: tullingeJson
          })
        });
    }

    objectToJsx(inputObject){
        jsxObject = inputObject.map(obj => {
            return <DisplayVerksamhet key={obj.id} data={obj} navRef={this.props.navigateReferens} />
        })  
        return jsxObject  
    
    }





    render() {

        const styles = StyleSheet.create({
            datumRubrik: {
              fontWeight: "bold",
              backgroundColor: '#808080',
              padding: 10,
              borderTopColor: '#000000',
              borderStyle: "solid",
              borderWidth:1
            },
            box:{
                flex: 1,
                flexDirection: 'row'
            },
            klockslagContainer:{
                flex: 1
            },
            klockslag:{
                padding:15,
                fontSize:10
            },
            rubrikOchPlats:{
                flex: 3,
                padding: 5
            },
            rubrik:{
                fontSize: 20
            },
            text:{
                fontSize: 15
            }
          });

        let verksamheterJsxArray = []
        let popularaVerksamheter = []
        let olikaDagarVerksamheter = []
        let mandagVerksamheter = []
        let tisdagVerksamheter = []
        let onsdagVerksamheter = []
        let torsdagVerksamheter = []
        let fredagVerksamheter = []
        let lordagVerksamheter = []
        let sondagVerksamheter = []


        if(this.state.tullingeJson){
            tullingeJson = this.state.tullingeJson
/*
            verksamheterJsxArray = tullingeJson.map(obj => {
                return <DisplayVerksamhet key={obj.id} data={obj} navRef={this.props.navigateReferens} />
            })
            
*/
            let x = tullingeJson.map(obj =>{
               // console.log('obj i acfApi', obj.acf.tillpopular)
                if(obj.acf.tillpopular == true){
                    popularaVerksamheter.push(obj)
                }
                if(obj.acf.dag == 8){
                    olikaDagarVerksamheter.push(obj)
                }      
                if(obj.acf.dag == 1){
                    mandagVerksamheter.push(obj)
                }
                if(obj.acf.dag == 2){
                    tisdagVerksamheter.push(obj)
                }      
                if(obj.acf.dag == 3){
                    onsdagVerksamheter.push(obj)
                }
                if(obj.acf.dag == 4){
                    torsdagVerksamheter.push(obj)
                }      
                if(obj.acf.dag == 5){
                    fredagVerksamheter.push(obj)
                }
                if(obj.acf.dag == 6){
                    lordagVerksamheter.push(obj)
                }      
                if(obj.acf.dag == 7){
                    sondagVerksamheter.push(obj)
                }                
            
            })

           // verksamheterJsxArray = this.objectToJsx(tullingeJson)

        }
        let popularaVerksamheterJSX = this.objectToJsx(popularaVerksamheter)
        let olikaDagarVerksamheterJSX = this.objectToJsx(olikaDagarVerksamheter)
        let mandagVerksamheterJSX = this.objectToJsx(mandagVerksamheter)
        let tisdagVerksamheterJSX = this.objectToJsx(tisdagVerksamheter)
        let onsdagVerksamheterJSX = this.objectToJsx(onsdagVerksamheter)
        let torsdagVerksamheterJSX = this.objectToJsx(torsdagVerksamheter)
        let fredagVerksamheterJSX = this.objectToJsx(fredagVerksamheter)
        let lordagVerksamheterJSX = this.objectToJsx(lordagVerksamheter)
        let sondagVerksamheterJSX = this.objectToJsx(sondagVerksamheter)



        return (
            <View>
                                <Text> hej från fetch verksamheter </Text>

                <Text style={styles.datumRubrik}>Populära verksamheter</Text>
                {popularaVerksamheterJSX}
                <Text style={styles.datumRubrik}>Olika dagar</Text>
                {olikaDagarVerksamheterJSX}
                <Text style={styles.datumRubrik}>Måndagar</Text>
                {mandagVerksamheterJSX}
                <Text style={styles.datumRubrik}>Tisdagar</Text>
                {tisdagVerksamheterJSX}
                <Text style={styles.datumRubrik}>Onsdagar</Text>
                {onsdagVerksamheterJSX}
                <Text style={styles.datumRubrik}>Torsdagar</Text>
                {torsdagVerksamheterJSX}
                <Text style={styles.datumRubrik}>Fredagar</Text>
                {fredagVerksamheterJSX}
                <Text style={styles.datumRubrik}>Lördagar</Text>
                {lordagVerksamheterJSX}
                <Text style={styles.datumRubrik}>Söndagar</Text>
                {sondagVerksamheterJSX}



                {
                   // verksamheterJsxArray
                    }
            </View>
        )
    }
}

/**
 [
    {
        "id": 638,
        "date": "2019-10-15T16:29:20",
        "date_gmt": "2019-10-15T16:29:20",
        "guid": {
            "rendered": "http://tullinge.digitalindahl.com/?post_type=apiverksamhet&#038;p=638"
        },
        "modified": "2019-10-15T19:35:20",
        "modified_gmt": "2019-10-15T19:35:20",
        "slug": "auto-draft-25",
        "status": "publish",
        "type": "apiverksamhet",
        "link": "https://tullinge.digitalindahl.com/apiverksamhet/auto-draft-25/",
        "featured_media": 0,
        "template": "",
        "acf": {
            "rubrik": "Sommarkonfirmation",
            "typ": "ungVux",
            "beskrivning": "Plats: Tullinge kyrka\r\nPersonal: Peter Stening & Erik Dufva\r\n\r\nSommarkonfirmanderna startar i maj och pågår fram till konfirmationen i juli. Konfirmandträffarna sker under ett antal helger under maj-juni, samt tre intensiv-veckor där vi den mellersta veckan åker på läger till Gotland.\r\n\r\nLäger, skratt, allvar, lek och en härlig gemenskap!\r\n\r\nAllt detta får du uppleva som konfirmand i Tullinge. Tillsammans lär vi oss mer om varandra, kyrkan och kristen tro. Vad du tycker och tänker spelar roll!\r\n\r\nFör mer information, kontakta Peter Stening.",
            "url1": "",
            "url2": "",
            "dag": "8",
            "tillpopular": true,
            "plats": "Tullinge gård"
        },
        "_links": {
            "self": [
                {
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/apiverksamhet/638"
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
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/media?parent=638"
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
    },
    {
        "id": 637,
        "date": "2019-10-15T16:26:56",
        "date_gmt": "2019-10-15T16:26:56",
        "guid": {
            "rendered": "http://tullinge.digitalindahl.com/?post_type=apiverksamhet&#038;p=637"
        },
        "modified": "2019-10-15T16:26:56",
        "modified_gmt": "2019-10-15T16:26:56",
        "slug": "auto-draft-24",
        "status": "publish",
        "type": "apiverksamhet",
        "link": "https://tullinge.digitalindahl.com/apiverksamhet/auto-draft-24/",
        "featured_media": 0,
        "template": "",
        "acf": {
            "rubrik": "Vinterkonfirmation",
            "typ": "ungVux",
            "beskrivning": "Plats: Tullinge gård\r\nTid: Onsdagar, varannan vecka, 16.00-18.00\r\nPersonal: Peter Stening & Erik Dufva\r\n\r\nVinterkonfirmanderna startar i oktober och pågår fram till konfirmationen i april. Däremellan har vi en konfirmandhelg samt åker på skidläger till Saxnäs under sportlovet. \r\n\r\nLäger, skratt, allvar, lek och en härlig gemenskap!\r\n\r\nAllt detta får du uppleva som konfirmand i Tullinge. Tillsammans lär vi oss mer om varandra, kyrkan och kristen tro. Vad du tycker och tänker spelar roll!\r\n\r\nFör mer information, kontakta Peter Stening.",
            "url1": "",
            "url2": "",
            "dag": "3",
            "tillpopular": false,
            "plats": "Tullinge gård"
        },
        "_links": {
            "self": [
                {
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/apiverksamhet/637"
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
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/media?parent=637"
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
    },
    {
        "id": 630,
        "date": "2019-10-15T16:24:13",
        "date_gmt": "2019-10-15T16:24:13",
        "guid": {
            "rendered": "http://tullinge.digitalindahl.com/?post_type=apiverksamhet&#038;p=630"
        },
        "modified": "2019-10-15T16:24:13",
        "modified_gmt": "2019-10-15T16:24:13",
        "slug": "auto-draft-23",
        "status": "publish",
        "type": "apiverksamhet",
        "link": "https://tullinge.digitalindahl.com/apiverksamhet/auto-draft-23/",
        "featured_media": 0,
        "template": "",
        "acf": {
            "rubrik": "Afternoon TEAologi",
            "typ": "ungVux",
            "beskrivning": "Plats: Tullinge gård\r\nTid: Söndagar, (15/9, 20/10 & 17/11), 15.00-17.00\r\n\r\nAfternoon teaologi är en öppen mötesplats på Tullinge gård. Här samtalar vi kring tro och livsfrågor. Ta del av tankar som hämtar inspiration utifrån kristen tro och tradition.\r\n\r\nVi bjuder in föreläsare som berättar och samtalar om det som berör våra liv. Samtidigt dricker vi te och äter scones tillsammans och får möjlighet att ställa frågor.\r\n\r\nFör mer info, kontakta Peter Johansson.",
            "url1": "",
            "url2": "",
            "dag": "7",
            "tillpopular": false,
            "plats": "Tullinge gård"
        },
        "_links": {
            "self": [
                {
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/apiverksamhet/630"
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
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/media?parent=630"
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
    },
    {
        "id": 636,
        "date": "2019-10-15T16:12:51",
        "date_gmt": "2019-10-15T16:12:51",
        "guid": {
            "rendered": "http://tullinge.digitalindahl.com/?post_type=apiverksamhet&#038;p=636"
        },
        "modified": "2019-10-15T16:12:51",
        "modified_gmt": "2019-10-15T16:12:51",
        "slug": "auto-draft-22",
        "status": "publish",
        "type": "apiverksamhet",
        "link": "https://tullinge.digitalindahl.com/apiverksamhet/auto-draft-22/",
        "featured_media": 0,
        "template": "",
        "acf": {
            "rubrik": "Konserter",
            "typ": "musik",
            "beskrivning": "Plats: Tullinge kyrka\r\nTid: Olika dagar & tider\r\n\r\nVi har ett levande konsertliv i Tullinge kyrka. Under vår- och höstterminen har vi alltid minst en konsert i månaden som oftast, men inte alltid, hamnar sista söndagen i månaden, kl. 18.00.\r\n\r\nUnder sommaren har vi sommarkonsert varje onsdag, kl. 19.00. Då plockar vi även ut vår hemmasnickrade kyrkbar där vi bjuder på alkoholfritt bubbel efter konserterna.\r\n\r\nAndra tider på året då vi har konserter är såklart vid högtiderna: Advent, Jul, Trettondagen, Påskveckan.\r\n\r\nHåll koll på musikkalendern för att se kommande konserter.\r\n\r\nFör mer info, kontakta Anton Högberg.",
            "url1": "",
            "url2": "",
            "dag": "8",
            "tillpopular": false,
            "plats": "Tullinge kyrka"
        },
        "_links": {
            "self": [
                {
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/apiverksamhet/636"
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
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/media?parent=636"
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
    },
    {
        "id": 635,
        "date": "2019-10-15T16:07:14",
        "date_gmt": "2019-10-15T16:07:14",
        "guid": {
            "rendered": "http://tullinge.digitalindahl.com/?post_type=apiverksamhet&#038;p=635"
        },
        "modified": "2019-10-15T16:07:14",
        "modified_gmt": "2019-10-15T16:07:14",
        "slug": "auto-draft-21",
        "status": "publish",
        "type": "apiverksamhet",
        "link": "https://tullinge.digitalindahl.com/apiverksamhet/auto-draft-21/",
        "featured_media": 0,
        "template": "",
        "acf": {
            "rubrik": "Mässa",
            "typ": "gtj",
            "beskrivning": "Plats: Tullinge kyrka\r\nTid: Söndagar, 11.00-12.00\r\n\r\nVarje söndag firar vi mässa i Tullinge kyrka. Vi har alltid mycket sång och musik, antingen med körer eller piano/orgelmusik. Vi har även söndagsskola för de små barnen varje söndag. Efter mässan serverar vi kostnadsfritt kyrkkaffe.\r\n\r\nFör mer info, kontakta Eva Ajaxén.",
            "url1": "",
            "url2": "",
            "dag": "7",
            "tillpopular": false,
            "plats": "Tullinge kyrka"
        },
        "_links": {
            "self": [
                {
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/apiverksamhet/635"
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
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/media?parent=635"
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
    },
    {
        "id": 634,
        "date": "2019-10-15T16:04:08",
        "date_gmt": "2019-10-15T16:04:08",
        "guid": {
            "rendered": "http://tullinge.digitalindahl.com/?post_type=apiverksamhet&#038;p=634"
        },
        "modified": "2019-10-15T16:04:08",
        "modified_gmt": "2019-10-15T16:04:08",
        "slug": "auto-draft-20",
        "status": "publish",
        "type": "apiverksamhet",
        "link": "https://tullinge.digitalindahl.com/apiverksamhet/auto-draft-20/",
        "featured_media": 0,
        "template": "",
        "acf": {
            "rubrik": "Fredagsmys",
            "typ": "barn",
            "beskrivning": "Plats: Tullinge gård\r\nTid: Fredagar, en gång i månaden, 17.15-18.00\r\nPersonal: Louise Bredberger\r\n\r\nEn grupp för barn som går på förskola eller yngre barn med föräldrar som inte har möjlighet att vara med på öppna förskolan. Vi har sångstund, leker, pysslar och äter korv med bröd.\r\n\r\nFör mer info, kontakta Louise Bredberger.",
            "url1": "",
            "url2": "",
            "dag": "5",
            "tillpopular": false,
            "plats": "Tullinge gård"
        },
        "_links": {
            "self": [
                {
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/apiverksamhet/634"
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
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/media?parent=634"
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
    },
    {
        "id": 633,
        "date": "2019-10-15T16:00:29",
        "date_gmt": "2019-10-15T16:00:29",
        "guid": {
            "rendered": "http://tullinge.digitalindahl.com/?post_type=apiverksamhet&#038;p=633"
        },
        "modified": "2019-10-15T16:00:59",
        "modified_gmt": "2019-10-15T16:00:59",
        "slug": "auto-draft-19",
        "status": "publish",
        "type": "apiverksamhet",
        "link": "https://tullinge.digitalindahl.com/apiverksamhet/auto-draft-19/",
        "featured_media": 0,
        "template": "",
        "acf": {
            "rubrik": "Barnkören",
            "typ": "musik",
            "beskrivning": "Plats: Tullinge gård\r\nTid: Torsdagar, 17.15-18.00\r\nKörledare: Camilla Helander\r\n\r\nSånglek för barn 4-5 år.\r\n\r\nFör mer info, kontakta Camilla Helander.",
            "url1": "",
            "url2": "",
            "dag": "4",
            "tillpopular": false,
            "plats": "Tullinge gård"
        },
        "_links": {
            "self": [
                {
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/apiverksamhet/633"
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
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/media?parent=633"
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
    },
    {
        "id": 632,
        "date": "2019-10-15T15:59:23",
        "date_gmt": "2019-10-15T15:59:23",
        "guid": {
            "rendered": "http://tullinge.digitalindahl.com/?post_type=apiverksamhet&#038;p=632"
        },
        "modified": "2019-10-15T15:59:23",
        "modified_gmt": "2019-10-15T15:59:23",
        "slug": "auto-draft-18",
        "status": "publish",
        "type": "apiverksamhet",
        "link": "https://tullinge.digitalindahl.com/apiverksamhet/auto-draft-18/",
        "featured_media": 0,
        "template": "",
        "acf": {
            "rubrik": "Tonprickarna",
            "typ": "musik",
            "beskrivning": "Plats: Tullinge gård\r\nTid: Torsdagar, 16.45-17.30\r\nKörledare: Ylva Bjernerup & Louise Bredberger\r\n\r\nSånglek för barn 4-5 år.\r\n\r\nFör mer info, kontakta Ylva Bjernerup.",
            "url1": "",
            "url2": "",
            "dag": "4",
            "tillpopular": false,
            "plats": "Tullinge gård"
        },
        "_links": {
            "self": [
                {
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/apiverksamhet/632"
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
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/media?parent=632"
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
    },
    {
        "id": 631,
        "date": "2019-10-15T15:57:18",
        "date_gmt": "2019-10-15T15:57:18",
        "guid": {
            "rendered": "http://tullinge.digitalindahl.com/?post_type=apiverksamhet&#038;p=631"
        },
        "modified": "2019-10-15T15:57:18",
        "modified_gmt": "2019-10-15T15:57:18",
        "slug": "auto-draft-17",
        "status": "publish",
        "type": "apiverksamhet",
        "link": "https://tullinge.digitalindahl.com/apiverksamhet/auto-draft-17/",
        "featured_media": 0,
        "template": "",
        "acf": {
            "rubrik": "Diskantkör",
            "typ": "musik",
            "beskrivning": "Plats: Tullinge gård\r\nTid: Torsdagar, 16.00-17.00\r\nKörledare: Camilla Helander\r\n\r\nEn kör för dig som är 9-12 år.\r\n\r\nFör mer info, kontakta Camilla Helander.",
            "url1": "",
            "url2": "",
            "dag": "4",
            "tillpopular": false,
            "plats": "Tullinge gård"
        },
        "_links": {
            "self": [
                {
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/apiverksamhet/631"
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
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/media?parent=631"
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
    },
    {
        "id": 628,
        "date": "2019-10-15T15:55:09",
        "date_gmt": "2019-10-15T15:55:09",
        "guid": {
            "rendered": "http://tullinge.digitalindahl.com/?post_type=apiverksamhet&#038;p=628"
        },
        "modified": "2019-10-15T15:55:09",
        "modified_gmt": "2019-10-15T15:55:09",
        "slug": "auto-draft-16",
        "status": "publish",
        "type": "apiverksamhet",
        "link": "https://tullinge.digitalindahl.com/apiverksamhet/auto-draft-16/",
        "featured_media": 0,
        "template": "",
        "acf": {
            "rubrik": "Småbarnsmusik",
            "typ": "barn",
            "beskrivning": "Plats: Tullinge gård\r\nTid: Torsdagar, 16.00-16.30\r\nKörledare: Ylva Bjernerup & Louise Bredberger\r\n\r\nSångstund för vuxna och barn 2-3 år. Vi sjunger och dansar och gör ramsor. Körledare: Louise Bredberger och Ylva Bjernerup.\r\n\r\nFör mer info, kontakta Ylva Bjernerup.",
            "url1": "",
            "url2": "",
            "dag": "4",
            "tillpopular": false,
            "plats": "Tullinge gård"
        },
        "_links": {
            "self": [
                {
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/apiverksamhet/628"
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
                    "href": "https://tullinge.digitalindahl.com/wp-json/wp/v2/media?parent=628"
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
]

 */