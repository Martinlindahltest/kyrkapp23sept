import React from 'react'
import { Text, ScrollView, Button, Linking, ImageBackground, StyleSheet, View } from 'react-native'
import HeaderImage from '../Components/HeaderImage'



const VerksamhetDetaljScreen = (props) => {


    let {
        rubrik, 
        typ, 
        beskrivning,
        text_pa_knapp_1,
        url1,
        text_pa_knapp_2,
        url2,
        dag,
        tillpopular
    } = props.navigation.state.params.Aktivitet

    const styles = StyleSheet.create({
        rubrik:{
            fontSize: 30,
            padding:3,
            paddingBottom:20,
            paddingTop: 20

        },
        text:{
            fontSize: 20,
            padding:3

        },
        ViewRuntText:{
            padding:30
        }        
      });

    //console.log('props.navigation.state', props.navigation.state.key)

    let knapp1 = []
    let knapp2 = []

    if(url1){
        //url1 = url1.toString()
        knapp1.push(<Button title={text_pa_knapp_1} onPress={ ()=>{ Linking.openURL(url1)}} key={1} />)
    }

    if(url2){
        //url1 = url1.toString()
        knapp2.push(<Button title={text_pa_knapp_2} onPress={ ()=>{ Linking.openURL(url2)}} key={2}/>)
    }


    let headerImage = <HeaderImage screen={'Ung/Vuxen'} />

if(typ == 'ungVux') {
     headerImage = <HeaderImage screen={'Ung/Vuxen'} />
}
if(typ == 'gtj') {
    headerImage = <HeaderImage screen={'Gudtjänst'} />
}
if(typ == 'musik') {
    headerImage = <HeaderImage screen={'Musik'} />
}
if(typ == 'barn') {
    headerImage = <HeaderImage screen={'Barn'} />
}

    return (
        <ImageBackground source={require('../assets/Kalender17okt/bakgrundSten17okt.jpg')} style={{width: '100%', height: '100%'}}>
            <ScrollView >
                {headerImage}

            <View style={styles.ViewRuntText}>
                <Text style={styles.text}>{beskrivning}  </Text>
                {knapp1}
                {knapp2}
            </View>
            </ScrollView>
        </ImageBackground>

    )
}

VerksamhetDetaljScreen.navigationOptions = navData => {
    //console.log('navData i VDS', navData.navigation.state.params.Aktivitet.rubrik)

    return {
      //headerTitle: navData.navigation.state.params.Aktivitet.rubrik,
      headerTitle: 'Verksamheter'
    };
  };


export default VerksamhetDetaljScreen
