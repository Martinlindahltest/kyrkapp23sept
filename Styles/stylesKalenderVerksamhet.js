import { StyleSheet } from 'react-native'


/** 
       const kalenderVerksamhetStyles = StyleSheet.create({
        datumRubrik: {
          fontWeight: "bold",
          backgroundColor: '#808080',
          padding: 10,
          borderTopColor: '#000000',
          borderStyle: "solid",
          borderWidth:1
        },
        box:{
            flex: 1,
            flexDirection: 'row',
            margin: 5
        },
        klockslagContainer:{
            flex: 3
        },
        klockslag:{
            //paddingTop:10,
            fontSize:15,
            //fontWeight: 'bold',
            justifyContent: 'center',
            alignItems: 'center',
    
        },
        rubrikOchPlats:{
            flex: 5,
            padding: 5,
            borderLeftWidth: 2,
         //   borderLeftColor: farg


        },
        rubrik:{
            fontSize: 20
        },
        text:{
            fontSize: 15
        },        
      });

      */

      const avenirRomanMM = {
        fontFamily: 'avenir-roman',
        //textShadowColor: 'rgba(0, 0, 0, 0.50)',
        //textShadowOffset: {width: 5, height: 5},
        //textShadowRadius: 10
      }
      

      const kalenderVerksamhetStyles = StyleSheet.create({
        datumRubrik: {
          fontWeight: "bold",
          backgroundColor: '#808080',
          padding: 10,
          borderTopColor: '#000000',
          borderStyle: "solid",
          borderWidth:1,
          ...avenirRomanMM

        },
        box:{
            flex: 1,
            flexDirection: 'row'
        },
        klockslagContainer:{
            flex: 2
        },
        klockslag:{
            padding:15,
            fontSize:14,
            ...avenirRomanMM

        },
        rubrikOchPlats:{
            flex: 4,
            padding: 5
        },
        rubrik:{
            fontSize: 20,
            ...avenirRomanMM

        },
        text:{
            fontSize: 15,
            ...avenirRomanMM

        }
      });

module.exports = kalenderVerksamhetStyles;