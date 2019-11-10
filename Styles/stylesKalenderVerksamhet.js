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


      

      const kalenderVerksamhetStyles = StyleSheet.create({
        datumRubrik: {
            fontWeight: "bold",
            backgroundColor: '#808080',
            padding: 10,
            fontFamily: 'avenir-roman',
            fontSize:15




        },
        box:{
            flex: 1,
            flexDirection: 'row'
        },
        klockslagContainer:{
            flex: 1.6
        },
        pilContainer:{
            flex: 0.3,
            padding:15,
        },
        klockslag:{
            padding:15,
            fontSize:14,
            fontFamily: 'avenir-roman',

        },
        rubrikOchPlats:{
            flex: 4.5,
            paddingVertical: 5
        },
        rubrik:{
            fontSize: 20,
            fontFamily: 'avenir-roman',

        },
        text:{
            fontSize: 15,
            fontFamily: 'avenir-roman',

        }
      });

module.exports = kalenderVerksamhetStyles;