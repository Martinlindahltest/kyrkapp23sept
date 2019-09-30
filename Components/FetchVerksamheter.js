import React, { Component } from 'react';
import DisplayVerksamhet from './DisplayVerksamhet'
import { View, Text } from 'react-native'


export default class FetchVerksamheter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    componentDidMount() {

        const jsonURL = 'https://jsontestmartin.s3.eu-north-1.amazonaws.com/verksamheterMedId30sept.json'
        fetch(jsonURL)
        .then(response => {
          return response.json();
        })
        .then(tullingeJson => {
            console.log('setstate')

          this.setState({
            tullingeJson: tullingeJson
          })
        });
    }



    render() {

        let verksamheterJsxArray = []

        if(this.state.tullingeJson){
            tullingeJson = this.state.tullingeJson

            verksamheterJsxArray = tullingeJson.map(obj => {
                return <DisplayVerksamhet data={obj} />
            })



        }



        return (
            <View>
                <Text> hej från fetch verksamheter </Text>
                {verksamheterJsxArray}
            </View>
        )
    }
}
