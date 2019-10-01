import React, { Component } from 'react';
import Display from './Display';
import { View, Text, Button } from 'react-native'
import { DrawerGestureContext } from 'react-navigation-drawer';


class FetchApp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }



    }

    componentDidMount() {

        const jsonURL = 'https://jsontestmartin.s3.eu-north-1.amazonaws.com/tullinge30sept.json'


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




        //let tullingeJson = []
        let jsxArray = []


        if(this.state.tullingeJson){
            tullingeJson = this.state.tullingeJson

 
            

            jsxArray = tullingeJson.map( obj => {

                let arrayMånadDagÅr = obj.Datum.split("/")
                let objektetsMånad = Number(arrayMånadDagÅr[0])
                let objektetsDag = Number(arrayMånadDagÅr[1])
              //  console.log('objektetsMånad', objektetsMånad)


                if(objektetsMånad > dagensMånad){
                    return <Display key={obj._id} data={obj} navRef={this.props.navigateReferens}  />
                }
                if(objektetsMånad >= dagensMånad && objektetsDag >= dagensDatum){
                    return <Display key={obj._id} data={obj} navRef={this.props.navigateReferens}  />
                }


            })
        }

        return (
            <View>
                <Button title="visa alla" onPress={() => this.componentDidMount()} />
                <Button title="Bara Gtj" onPress={()=> {
                   let result = this.state.tullingeJson.filter(obj => obj.Verksamhetstyp === 'Gtj');
                    this.setState({
                        tullingeJson: result
                    })
                }}/>
                                {jsxArray}
                                <Text>Hej fran fetchapp</Text>
            </View>
        );
    }
}

export default FetchApp;