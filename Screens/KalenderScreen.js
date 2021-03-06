import React from 'react'
import { View, ScrollView, StyleSheet, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';
import FetchApp from '../Components/FetchApp'
import Tabmeny5 from '../Components/Tabmeny5'
import TabmenyText from '../Components/TabmenyText'

import HeaderButton from '../Components/HeaderButton'
import HeaderImage from '../Components/HeaderImage'





const KalenderScreen = (props) => {

  const styles = StyleSheet.create({
    tabContainer: {
      height: 70 
    },
    textContainer: {
      height: 15,
    }
  });

 
    return (
      <View>
        <View>
          <View style={styles.tabContainer}>
          <Tabmeny5 KalenderScreenProps={props} />
          </View>
          <View style={styles.textContainer}>
          <TabmenyText />
          </View>
        </View>

        <ScrollView >

            <HeaderImage screen={'Kalender'} />
            <FetchApp navigateReferens={props} />

        </ScrollView>

        </View>
        
    )
}

//'../assets/Kalender17okt/kal-verk-front.jpg'

KalenderScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Kalender',
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


export default KalenderScreen
