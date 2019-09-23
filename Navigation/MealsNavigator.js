import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Ionicons } from '@expo/vector-icons';


import CategoriesScreen from '../Screens/CatogeriesScreen'
import CatogeryMealsScreen from '../Screens/CatogeryMealsScreen'
import FavoritesScreen from '../Screens/FavoritesScreen'
import KalenderScreen from '../Screens/KalenderScreen'
import MealDetailsScreen from '../Screens/MealDetailsScreen'
import { createAppContainer } from 'react-navigation';

import VerksamheterScreen from '../Screens/VerksamheterScreen'


const KalenderNavigator = createStackNavigator({
    Kalender: KalenderScreen,
})


const VerksamheterNavigator = createStackNavigator({
    Verksamheter: VerksamheterScreen,

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
      }
});


export default  createAppContainer(MainNavigator)