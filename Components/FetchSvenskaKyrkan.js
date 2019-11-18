import React, { Component } from "react";
import { Text, View } from 'react-native'

export default class FetchSvenskaKyrkan extends Component {
  state = {
    hasErrors: false,
    planets: {},
    isloading: true
  };

  componentDidMount() {
    fetch("https://api.svenskakyrkan.se/calendarsearch/v4/SearchByParent?orgId=7681&apikey=b085d57a-4f3d-4742-933f-ce94a840c203")
      .then(res => res.json())
      .then(res => this.setState({ planets: res, isloading: false }))
      .catch(() => this.setState({ hasErrors: true }));
  }




  render() {

    let newArray
    let displayArray

    if(this.state.isloading === false){
   //   variabelnamn = this.state.planets.value.length
      
   //   console.log('variabelnamn', variabelnamn)
/**   for (i = 0; i < this.state.planets.value.length; i++) {
    console.log(this.state.planets.value[i].PlaceDescription)
    }
     */

    newArray = this.state.planets.value

    newArray = newArray.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(a.StartTime) - new Date(b.StartTime);
    });

    console.log('newArray', newArray)


   displayArray = newArray.map(obj => {
   return <View key={obj.Id}>
   <Text>StartTime: {obj.StartTime}</Text>
     <Text>PlaceDescription: {obj.PlaceDescription}</Text>
     <Text>EventTime: {obj.EventTime}</Text>
   <Text>Title {obj.Title}</Text>
   <Text>Description: {obj.Description}</Text>
   <Text> </Text>


   </View> 
  }) 

  }

    return(
      <View>
        {displayArray}
      </View>
    )
  }
}
