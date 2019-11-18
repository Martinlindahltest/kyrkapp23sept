import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from 'react-native'


const FetchSvenskaKyrkan = () => {
    const [hasError, setErrors] = useState(false);
    const [planets, setPlanets] = useState({});
  
    async function fetchData() {
      const res = await fetch("https://api.svenskakyrkan.se/calendarsearch/v4/SearchByParent?orgId=7681&apikey=b085d57a-4f3d-4742-933f-ce94a840c203");
      res
        .json()
        .then(res => setPlanets(res))
        .catch(err => setErrors(err));
    }
  
    useEffect(() => {
      fetchData();
    });

  return(
      <View>
<Text>
    {JSON.stringify(planets)}
</Text>
</View>

    ) 

};
export default FetchSvenskaKyrkan;