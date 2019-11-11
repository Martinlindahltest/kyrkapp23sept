import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import kalenderVerksamhetStyles from '../Styles/stylesKalenderVerksamhet'




export default function DisplayVerksamhet(props) {

      
     const styles = kalenderVerksamhetStyles



const {
    rubrik, 
    typ, 
    beskrivning,
    url1,
    url2,
    dag,
    tillpopular,
    plats, 
    tid
} = props.data.acf


//console.log('props DV', props.data.id)

    return (

                <TouchableOpacity key={props.data.id} onPress={() => props.navRef.navigation.navigate('VerksamheterDetalj', {Aktivitet: props.data.acf}) }>
                    <View >

                
                        
                        <View style={styles.box}>
                        <View style={{flex: 0.5}}>
            </View>

                        <View style={styles.rubrikOchPlats}>
                                <Text style={styles.rubrik}>{rubrik}</Text>
                                <Text style={styles.text} >{plats}  </Text>


                            </View>
                            <View style={styles.pilContainer}>
                                <Image style={{width: 15, height: 15}} source={require('../assets/Kalender17okt/pil.png')} />
                            </View>

                        </View>

                    </View>
                    <View
                                    style={{
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 1,
                                    }}
                                    />
                </TouchableOpacity>
        

    )
}
