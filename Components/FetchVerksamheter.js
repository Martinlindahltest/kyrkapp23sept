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

        const jsonURL = 'https://tullinge.digitalindahl.com/wp-json/wp/v2/apiverksamhet'
        fetch(jsonURL)
        .then(response => {
          return response.json();
        })
        .then(tullingeJson => {
            console.log('setstate i fetchVerksamheter')

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
                return <DisplayVerksamhet key={obj.id} data={obj} navRef={this.props.navigateReferens} />
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
