import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Ionicons } from '@expo/vector-icons';


import CategoriesScreen from '../Screens/CatogeriesScreen'
import CatogeryMealsScreen from '../Screens/CatogeryMealsScreen'
import FavoritesScreen from '../Screens/FavoritesScreen'
import KalenderScreen from '../Screens/KalenderScreen'
import MealDetailsScreen from '../Screens/MealDetailsScreen'
import { createAppContainer } from 'react-navigation';


const KalenderNavigator = createStackNavigator({
    Kalender: KalenderScreen,
    Categories: CategoriesScreen,
    CatogeryMeals: CatogeryMealsScreen,
    Favorites: FavoritesScreen,
    MealDetails: MealDetailsScreen
})




const MainNavigator = createDrawerNavigator({
    Home: {
        screen: KalenderNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
          }
      }
});


export default  createAppContainer(MainNavigator)