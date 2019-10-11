import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  rubrikSizeColor: {
    color: 'white',
    fontSize: 15
  },
  rubrikSizeColor20: {
    color: 'white',
    fontSize: 20
  }
});


export default class FetchSenasteHandelse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            WpJson: {},
            isLoaded: false
        }

    }

    componentDidMount() {

        const jsonURL = 'https://tullinge.digitalindahl.com/wp-json/wp/v2/posts?posts?per_page=1'
        fetch(jsonURL)
        .then(response => {
          return response.json();
        })
        .then(WpJson => {
         //   console.log('setstate')

          this.setState({
            WpJson: WpJson,
            isLoaded: true
          })
        });
    }

    render() {

      if(this.state.isLoaded == true){
          //console.log('wp console.log', this.state.WpJson[0].title.rendered)
          return (
            <View>
              <Text style={styles.rubrikSizeColor20}>
                Senaste Händelse:
              </Text>
                <Text style={styles.rubrikSizeColor} >
                  {this.state.WpJson[0].title.rendered}
                </Text>
            </View>)
      }
      else
      {
        return (
          <View>
              <Text style={styles.rubrikSizeColor20}>
                Senaste Händelse:
              </Text>
          </View>
      )

      }

    }
}
