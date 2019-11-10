import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet } from 'react-native'
import FetchApp from '../Components/FetchApp'
import Tabmeny5 from '../Components/Tabmeny5'
import TabmenyText from '../Components/TabmenyText'


import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton'
import { DrawerActions } from 'react-navigation-drawer';
import HeaderImage from '../Components/HeaderImage'



const KalenderVuxenScreen = (props) => {

  const styles = StyleSheet.create({
    img: {
      flex:1,
      height: 200,
      width: '100%',
      resizeMode: "cover"
    },
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
              <HeaderImage screen={'Ung/Vuxenkalender'} />

            <FetchApp navigateReferens={props} KategoriFilter={'Vuxen'}  />
        </ScrollView>
        </View>
        
    )
}

KalenderVuxenScreen.navigationOptions = navData => {
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


export default KalenderVuxenScreen
