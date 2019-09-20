import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';


import CategoriesScreen from '../Screens/CatogeriesScreen'
import CatogeryMealsScreen from '../Screens/CatogeryMealsScreen'
import FavoritesScreen from '../Screens/FavoritesScreen'
import FiltersScreen from '../Screens/FiltersScreen'
import MealDetailsScreen from '../Screens/MealDetailsScreen'
import { createAppContainer } from 'react-navigation';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CatogeryMeals: CatogeryMealsScreen,
    Favorites: FavoritesScreen,
    Filters: FiltersScreen,
    MealDetails: MealDetailsScreen
})

const MainNavigator = createDrawerNavigator({
    Categories: CategoriesScreen,
    CatogeryMeals: CatogeryMealsScreen,
    Favorites: FavoritesScreen,
    Filters: FiltersScreen,
    MealDetails: MealDetailsScreen

});

export default  createAppContainer(MealsNavigator)