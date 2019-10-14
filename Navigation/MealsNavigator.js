import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { Ionicons } from '@expo/vector-icons';


import KalenderScreen from '../Screens/KalenderScreen'
import KalenderDetaljScreen from '../Screens/KalenderDetaljScreen'


import { createAppContainer } from 'react-navigation';

import AnslagstavlaScreen from '../Screens/AnslagstavlaScreen'
import VerksamheterScreen from '../Screens/VerksamheterScreen'
import HändelserScreen from '../Screens/HändelserScreen'
import PersonalScreen from '../Screens/PersonalScreen'
import HittaHitScreen from '../Screens/HittaHitScreen'

import KalenderGtjScreen from '../Screens/KalenderGtjScreen'
import KalenderBarnScreen from '../Screens/KalenderBarnScreen'
import KalenderVuxenScreen from '../Screens/KalenderVuxenScreen'
import KalenderMusikScreen from '../Screens/KalenderMusikScreen'

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
/*
const HändelserNavigator = createStackNavigator({
    Händelser: HändelserScreen,
})
*/
const PersonalNavigator = createStackNavigator({
    Personal: PersonalScreen,
})
const HittaHitNavigator = createStackNavigator({
    HittaHit: HittaHitScreen,
})

const KalenderTabNavigator =  createBottomTabNavigator(
    {
      Alla: KalenderNavigator2,
      Gudtjänst: KalenderGtjNavigator,
      Barn: KalenderBarnNavigator,
      UngVuxen: KalenderVuxenNavigator,
      Musik: KalenderMusikNavigator
    });


//this.props.navigation.navigate('NestedNavigator1', {}, NavigationActions.navigate({ routeName: 'screenB' }))

const MainNavigator = createDrawerNavigator({
    Anslagstavla: {
        screen: AnslagstavlaNavigator,
        navigationOptions: {
            drawerLabel: 'Anslagstavla'
          }
      },
    Kalender: {
        screen: KalenderTabNavigator,
        navigationOptions: {
            drawerLabel: 'Kalender'
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
            drawerLabel: 'HittaHit'
          }
      }
});


export default  createAppContainer(MainNavigator)