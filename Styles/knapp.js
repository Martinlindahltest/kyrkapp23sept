import { StyleSheet } from 'react-native'

      const knapp = StyleSheet.create({
        helaKnappen: {
            borderStyle: "solid",
            borderWidth: 4,
            borderColor: 'white',
            padding: 20,
            backgroundColor: 'grey',
            fontFamily: 'avenir-roman',
            textShadowColor: 'rgba(0, 0, 0, 0.50)',
            textShadowOffset: {width: 5, height: 5},
            textShadowRadius: 10
          }
      });

module.exports = knapp;