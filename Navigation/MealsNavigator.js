import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Ionicons } from '@expo/vector-icons';


import KalenderScreen from '../Screens/KalenderScreen'
import KalenderDetaljScreen from '../Screens/KalenderDetaljScreen'


import { createAppContainer } from 'react-navigation';

import VerksamheterScreen from '../Screens/VerksamheterScreen'
import HändelserScreen from '../Screens/HändelserScreen'
import PersonalScreen from '../Screens/PersonalScreen'
import HittaHitScreen from '../Screens/HittaHitScreen'

import KalenderGtjScreen from '../Screens/KalenderGtjScreen'





const KalenderNavigator = createStackNavigator({
    Kalender: KalenderScreen,
    KalenderDetalj: KalenderDetaljScreen,
    KalenderGtj: KalenderGtjScreen
})


const VerksamheterNavigator = createStackNavigator({
    Verksamheter: VerksamheterScreen,
})

const HändelserNavigator = createStackNavigator({
    Händelser: HändelserScreen,
})
const PersonalNavigator = createStackNavigator({
    Personal: PersonalScreen,
})
const HittaHitNavigator = createStackNavigator({
    HittaHit: HittaHitScreen,
})




const MainNavigator = createDrawerNavigator({
    Kalender: {
        screen: KalenderNavigator,
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
      Händelser: {
        screen:HändelserNavigator,
        navigationOptions: {
            drawerLabel: 'Händelser'
          }
      },
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