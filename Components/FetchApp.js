import React, { Component } from 'react';
import Display from './Display';
import { View, Text, Button } from 'react-native'


class FetchApp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }



    }

    componentDidMount() {

        //console.log('FetchAppProps', this.props.KategoriFilter)


        const jsonURL = 'https://jsontestmartin.s3.eu-north-1.amazonaws.com/tullinge30sept.json'


        fetch(jsonURL)
        .then(response => {
          return response.json();
        })
        .then(tullingeJson => {
            if(this.props.KategoriFilter === 'Gtj'){
                 tullingeJson = tullingeJson.filter(obj => obj.Verksamhetstyp === 'Gtj');
            }
            if(this.props.KategoriFilter === 'Barn'){
                tullingeJson = tullingeJson.filter(obj => obj.Verksamhetstyp === 'Barn');
           }
           if(this.props.KategoriFilter === 'Vuxen'){
            tullingeJson = tullingeJson.filter(obj => obj.Verksamhetstyp === 'Vuxen');
           }
            if(this.props.KategoriFilter === 'Musik'){
                tullingeJson = tullingeJson.filter(obj => obj.Verksamhetstyp === 'Musik');
    
       }


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
        const dagensMånad = datumSplitArray[1]
        const dagensDatum = Number(datumSplitArray[2][0] + datumSplitArray[2][1])


//console.log('dagensMånad', dagensMånad)

        //let tullingeJson = []
        let jsxArray = []


        if(this.state.tullingeJson){
            tullingeJson = this.state.tullingeJson

 
            

            jsxArray = tullingeJson.map( obj => {

                let arrayMånadDagÅr = obj.Datum.split("/")
                let objektetsMånad = Number(arrayMånadDagÅr[0])
                let objektetsDag = arrayMånadDagÅr[1]


                //console.log('objektetsMånad', objektetsMånad)

                if(objektetsMånad > dagensMånad){
                    return <Display key={obj._id} data={obj} navRef={this.props.navigateReferens} objektetsMånad={objektetsMånad} objektetsDag={objektetsDag}   />
                }
                if(objektetsMånad >= dagensMånad && objektetsDag >= dagensDatum){
                    return <Display key={obj._id} data={obj} navRef={this.props.navigateReferens} objektetsMånad={objektetsMånad} objektetsDag={objektetsDag}   />
                }


            })
        }

        return (
            <View>
                                {jsxArray}
                                <Text>Hej fran fetchapp</Text>
            </View>
        );
    }
}

export default FetchApp;