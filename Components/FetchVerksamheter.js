import React, { Component } from 'react';
import DisplayVerksamhet from './DisplayVerksamhet'
import { View, Text, StyleSheet } from 'react-native'


export default class FetchVerksamheter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

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

        if(this.state.tullingeJson){
            tullingeJson = this.state.tullingeJson

            //console.log('fetchVerksamheter innan sort', tullingeJson)



            verksamheterJsxArray = tullingeJson.map(obj => {
                return <DisplayVerksamhet key={obj.id} data={obj} navRef={this.props.navigateReferens} />
            })



        }

        console.log(styles)

        return (
            <View>
                                <Text> hej från fetch verksamheter </Text>

                <Text style={styles.datumRubrik}>Populära verksamheter</Text>
                <Text style={styles.datumRubrik}>Olika dagar</Text>
                <Text style={styles.datumRubrik}>Måndagar</Text>
                <Text style={styles.datumRubrik}>Tisdagar</Text>
                <Text style={styles.datumRubrik}>Onsdagar</Text>
                <Text style={styles.datumRubrik}>Torsdagar</Text>
                <Text style={styles.datumRubrik}>Fredagar</Text>
                <Text style={styles.datumRubrik}>Lördagar</Text>
                <Text style={styles.datumRubrik}>Söndagar</Text>



                {verksamheterJsxArray}
            </View>
        )
    }
}
