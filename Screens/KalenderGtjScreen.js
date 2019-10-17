import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet } from 'react-native'
import FetchApp from '../Components/FetchApp'
import Tabmeny5 from '../Components/Tabmeny5'

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton'
import { DrawerActions } from 'react-navigation-drawer';



const KalenderGtjScreen = (props) => {

  const styles = StyleSheet.create({
    img: {
      flex:1,
      height: 200,
      width: '100%',
      resizeMode: "cover"
    },
    tabContainer: {
      height: 70 
    }
  });
 
    return (
      <View>

<View style={styles.tabContainer}>
        <Tabmeny5 KalenderScreenProps={props} />

        </View>
              <ScrollView >
              <Image 
      style={styles.img}
      source={require('../assets/Kalender17okt/kal-verk-gtj.jpg')}
      />
            <FetchApp navigateReferens={props} KategoriFilter={'Gtj'}  />
        </ScrollView>
        </View>
        
    )
}

KalenderGtjScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Gudtjänstkalender',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        />
      </HeaderButtons>
    )
    

  };
};


export default KalenderGtjScreen
