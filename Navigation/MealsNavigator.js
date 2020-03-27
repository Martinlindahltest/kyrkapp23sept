import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Button, Image, SafeAreaView } from 'react-native'
import React from 'react'


import { Ionicons } from '@expo/vector-icons';


import KalenderScreen from '../Screens/KalenderScreen'
import KalenderDetaljScreen from '../Screens/KalenderDetaljScreen'


import { createAppContainer } from 'react-navigation';

import AnslagstavlaScreen from '../Screens/AnslagstavlaScreen'
import VerksamheterScreen from '../Screens/VerksamheterScreen'
import PersonalScreen from '../Screens/PersonalScreen'
import HittaHitScreen from '../Screens/HittaHitScreen'

import KalenderGtjScreen from '../Screens/KalenderGtjScreen'
import KalenderBarnScreen from '../Screens/KalenderBarnScreen'
import KalenderVuxenScreen from '../Screens/KalenderVuxenScreen'
import KalenderMusikScreen from '../Screens/KalenderMusikScreen'
import OmOssScreen from '../Screens/OmOssScreen'

import VerksamheterDetaljScreen from '../Screens/VerksamhetDetaljScreen'



const AnslagstavlaNavigator = createStackNavigator({
    Anslagstavla: AnslagstavlaScreen,
})

const KalenderNavigator = createStackNavigator({
    Kalender: KalenderScreen,
    KalenderDetalj: KalenderDetaljScreen,
    KalenderGtj: KalenderGtjScreen,
    KalenderBarn: KalenderBarnScreen,
    KalenderVuxen: KalenderVuxenScreen,
    KalenderMusik: KalenderMusikScreen
})

const KalenderNavigator2 = createStackNavigator({
  Kalender: KalenderScreen,
  KalenderDetalj: KalenderDetaljScreen,
})

const KalenderGtjNavigator = createStackNavigator({
  KalenderGtj: KalenderGtjScreen,
  KalenderDetalj: KalenderDetaljScreen,
})

const KalenderBarnNavigator = createStackNavigator({
  KalenderBarn: KalenderBarnScreen,
  KalenderDetalj: KalenderDetaljScreen,
})

const KalenderVuxenNavigator = createStackNavigator({
  KalenderVuxen: KalenderVuxenScreen,
  KalenderDetalj: KalenderDetaljScreen,
})

const KalenderMusikNavigator = createStackNavigator({
  KalenderMusik: KalenderMusikScreen,
  KalenderDetalj: KalenderDetaljScreen,
})

const VerksamheterNavigator = createStackNavigator({
    Verksamheter: VerksamheterScreen,
    VerksamheterDetalj: VerksamheterDetaljScreen,

})
const PersonalNavigator = createStackNavigator({
    Personal: PersonalScreen,
})
const HittaHitNavigator = createStackNavigator({
    HittaHit: HittaHitScreen,
})

const OmOssNavigator = createStackNavigator({
  OmOss: OmOssScreen
})

const KalenderTabNavigator =  createBottomTabNavigator(
    {
      Alla: {
        screen: KalenderNavigator2,
        navigationOptions: {
          tabBarLabel:"KalenderNavigator2",
          tabBarVisible: false
        }
      },
      Gudtjänst: {
        screen: KalenderGtjNavigator,
        navigationOptions: {
          tabBarLabel:"KalenderGtjNavigator",
          tabBarVisible: false
        }
      },
      Barn: {
        screen: KalenderBarnNavigator,
        navigationOptions: {
          tabBarLabel:"KalenderBarnNavigator",
          tabBarVisible: false
        }
      },
      UngVuxen: {
        screen: KalenderVuxenNavigator,
        navigationOptions: {
          tabBarLabel:"KalenderVuxenNavigator",
          tabBarVisible: false
        }
      },
      Musik: {
        screen: KalenderMusikNavigator,
        navigationOptions: {
          tabBarLabel:"KalenderMusikNavigator",
          tabBarVisible: false
        }
      },
    }
  );
/** 
 HomeScreen:{
    screen:HomeScreen,
    navigationOptions: {
      tabBarLabel:"Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-bookmarks" size={20}/>
      )
    },
  },

*/

//this.props.navigation.navigate('NestedNavigator1', {}, NavigationActions.navigate({ routeName: 'screenB' }))


const styles = StyleSheet.create({
  drawerimage: {
    height: 100,
    width: '70%',
    resizeMode: 'contain'

  },
  logoImg: {
    height: 50,
    width: '60%',
    resizeMode: 'contain',

  },
  texten: {
    fontFamily: 'avenir-roman',
    fontSize: 22,
  },
  aktivText: {
    color: 'black'
  },
  runtBild: {
    justifyContent: 'center',
    //alignItems: 'center',
    marginLeft:17
  },
  runtHeaderBild: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  
  
});


const customDrawerContentComponent = (props) => (

  <SafeAreaView>

    <View style={styles.runtHeaderBild}>
      <Image style={styles.drawerimage} source={require('../assets/MenySplash.png')} /> 
    </View>

    <DrawerNavigatorItems activeLabelStyle={styles.aktivText} labelStyle={styles.texten} {...props} />

    <View style={styles.runtBild}>
      <Image style={styles.logoImg} source={require('../assets/Tullinge.png')} /> 
    </View>

  </SafeAreaView>
)


const MainNavigator = createDrawerNavigator({

    Anslagstavla: {
        screen: AnslagstavlaNavigator,
        navigationOptions: {
            drawerLabel: 'Förstasida',
        
          }
      },
    Kalender: {
        screen: KalenderTabNavigator,
        navigationOptions: {
            drawerLabel: 'Kalender',
          }
      },
       Verksamheter: {
         screen: VerksamheterNavigator,
         navigationOptions: {
             drawerLabel: 'Verksamheter'
           }
       },
    //   Händelser: {
    //     screen:HändelserNavigator,
    //     navigationOptions: {
    //         drawerLabel: 'Händelser'
    //       }
    //   },
      Personal: {
        screen:PersonalNavigator,
        navigationOptions: {
            drawerLabel: 'Personal'
          }
      },
      HittaHit: {
        screen:HittaHitNavigator,
        navigationOptions: { 
            drawerLabel: 'Hitta hit',
          }
      },
      OmOss: {
        screen:OmOssNavigator,
        navigationOptions: {
          drawerLabel: 'Om appen'
        }
      }

},
{
  drawerBackgroundColor: '#e6e6e6',
  initialRouteName: 'Anslagstavla',
  contentComponent: customDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen' 

}
);



export default  createAppContainer(MainNavigator)