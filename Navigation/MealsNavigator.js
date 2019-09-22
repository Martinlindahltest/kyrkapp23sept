import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Ionicons } from '@expo/vector-icons';


import CategoriesScreen from '../Screens/CatogeriesScreen'
import CatogeryMealsScreen from '../Screens/CatogeryMealsScreen'
import FavoritesScreen from '../Screens/FavoritesScreen'
import FiltersScreen from '../Screens/FiltersScreen'
import MealDetailsScreen from '../Screens/MealDetailsScreen'
import { createAppContainer } from 'react-navigation';


const MealsNavigator = createStackNavigator({
    Filters: FiltersScreen,
    Categories: CategoriesScreen,
    CatogeryMeals: CatogeryMealsScreen,
    Favorites: FavoritesScreen,
    MealDetails: MealDetailsScreen
})




const MainNavigator = createDrawerNavigator({
    Home: {
        screen: MealsNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
          }
      }
});


export default  createAppContainer(MainNavigator)