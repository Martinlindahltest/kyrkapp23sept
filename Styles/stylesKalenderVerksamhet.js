import { StyleSheet } from 'react-native'



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

module.exports = kalenderVerksamhetStyles;