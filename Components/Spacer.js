import React from 'react'
import { View, Text, StyleSheet } from 'react-native'



const Spacer = (props) => {

    const styles = StyleSheet.create({
        space: {
          //backgroundColor: '#808080',
          height: props.hojd   
    }});
    
    return (
        <View style={styles.space}>
        </View>
    )
}

export default Spacer