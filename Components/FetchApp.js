import React, { Component } from 'react';
import Display from './Display';
import { View, Text, Button } from 'react-native'


class FetchApp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        //this.props.navigateReferens = this.props.navigateReferens.bind(this);


    }

    componentDidMount() {

        const jsonURL = 'https://jsontestmartin.s3.eu-north-1.amazonaws.com/Tullinge28septMedId.json'


        fetch(jsonURL)
        .then(response => {
          return response.json();
        })
        .then(tullingeJson => {
          this.setState({
            tullingeJson: tullingeJson
          })
        });
    }

    

    render() {

        let datum =new Date().toISOString()	 

        let datumSplitArray = datum.split("-")

        //let res2 = res[2][0] + res[2][1]
        //const dagensÅr = datumSplitArray[0]
        const dagensMånad = 3
        //datumSplitArray[1]
        const dagensDatum = Number(datumSplitArray[2][0] + datumSplitArray[2][1])



     //   console.log('datum', datum)
     //   console.log('datumSplitArray', datumSplitArray)
     //   console.log('år', dagensÅr, 'månad', dagensMånad, 'datum', dagensDatum )


        let tullingeJson = []
        let jsxArray = []


        if(this.state.tullingeJson){
            tullingeJson = this.state.tullingeJson

 
            

            jsxArray = tullingeJson.map( obj => {

                let arrayMånadDagÅr = obj.Datum.split("/")
                let objektetsMånad = Number(arrayMånadDagÅr[0])
                let objektetsDag = Number(arrayMånadDagÅr[1])
                //let objektetsÅr = Number(arrayMånadDagÅr[2])

                if(objektetsMånad === dagensMånad && objektetsDag > dagensDatum){
                    return <Display key={obj._id} data={obj} navRef={this.props.navigateReferens}  />
                }
                if(objektetsMånad > dagensMånad){
                    return <Display key={obj._id} data={obj} navRef={this.props.navigateReferens} />
                }
                else{
                    return         //    <Text>Passerad</Text>

                }
            })
        }

        console.log('navigatereferens i fetch App', this.props)

        return (
            <View>
                <Button title="hej" onPress={() => this.props.navigateReferens()} />
                                {jsxArray}
                                <Text>Hej fran fetchapp</Text>
            </View>
        );
    }
}

export default FetchApp;