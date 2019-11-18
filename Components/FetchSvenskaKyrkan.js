import React, { Component } from "react";
import { Text, View } from 'react-native'

export default class FetchSvenskaKyrkan extends Component {
  state = {
    hasErrors: false,
    planets: {},
    isloading: true
  };

  componentDidMount() {
    fetch("https://api.svenskakyrkan.se/calendarsearch/v4/SearchByParent?orgId=7681&$top=1&apikey=b085d57a-4f3d-4742-933f-ce94a840c203")
      .then(res => res.json())
      .then(res => this.setState({ planets: res, isloading: false }))
      .catch(() => this.setState({ hasErrors: true }));
  }




  render() {

    let variabelnamn = 'lalala'

    if(this.state.isloading === false){
      variabelnamn = this.state.planets.value[0].Active
      console.log('variabelnamn', variabelnamn)
    }

    return(
      <View>
        <Text>
          lalala
        </Text>
      </View>
    )
  }
}
