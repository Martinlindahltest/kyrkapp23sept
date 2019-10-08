import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class FetchSenasteHandelse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            WpJson: {}
        }

    }

    componentDidMount() {

        const jsonURL = 'https://tullinge.digitalindahl.com/wp-json/wp/v2/posts'
        fetch(jsonURL)
        .then(response => {
          return response.json();
        })
        .then(WpJson => {
         //   console.log('setstate')

          this.setState({
            WpJson: WpJson
          })
        });
    }

    render() {
        return (
            <View>
                <Text>{
                  //  console.log('wp title', this.state)
                    }</Text>
            </View>
        )
    }
}
