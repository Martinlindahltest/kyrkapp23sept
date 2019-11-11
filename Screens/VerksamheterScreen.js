import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';
import FetchVerksamheter from '../Components/FetchVerksamheter'
import { WebView } from 'react-native-webview';
import Tabmeny5Verksamheter from '../Components/Tabmeny5Verksamheter'
import TabmenyText from '../Components/TabmenyText'



import HeaderButton from '../Components/HeaderButton'




const VerksamheterScreen = (props) => {

  const styles = StyleSheet.create({
    tabContainer: {
      height: 70 
    },
    textContainer: {
      height: 15,
    }
  });
    return (
      /*
                  <WebView source={{ uri: 'https://tullinge.digitalindahl.com/verksamheter' }} />

      */
     <View>
        <View>
          <View style={styles.tabContainer}>
          <Tabmeny5Verksamheter KalenderScreenProps={props} />
          </View>
          <View style={styles.textContainer}>
          <TabmenyText />
          </View>
        </View>
     
     <ScrollView>
               <FetchVerksamheter navigateReferens={props} />
     </ScrollView>
     </View>
    )
} 

VerksamheterScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Verksamheter',
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              //
              //console.log(navData.navigation.navigate)
              //navData.navigation.navigate('DrawerToggle');'
              navData.navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          />
        </HeaderButtons>
      )
    };
  };


export default VerksamheterScreen
