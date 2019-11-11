import React, {useState} from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';
import FetchVerksamheter from '../Components/FetchVerksamheter'
import TabmenyText from '../Components/TabmenyText'



import HeaderButton from '../Components/HeaderButton'




const VerksamheterScreen = (props) => {

  const [vadskavisas, setVadskavisas] = useState('inget');



  const styles = StyleSheet.create({
    tabContainer: {
      height: 70 
    },
    textContainer: {
      height: 15,
    },
    box:{
      flex: 1,
      backgroundColor: 'black'

  },
  img: {
    height:'100%',
    width:'100%',
    resizeMode: "contain"
  }, 
  textUnderBild: {
    color: 'red'
  }
  });



    return (
      /*
                  <WebView source={{ uri: 'https://tullinge.digitalindahl.com/verksamheter' }} />

      */
     <View>
        <View>
          <View style={styles.tabContainer}>
            

      <View style={{flex: 1, flexDirection: 'row', height:70}}>

<View style={styles.box}>
      <TouchableOpacity onPress={()=> setVadskavisas('allt')}>
        <Image 
        style={styles.img}
        source={require('../assets/tab5/Alla.png')}
        /> 
      </TouchableOpacity>
    </View>

<View style={styles.box}>
<TouchableOpacity onPress={()=> setVadskavisas('gudstjanst')}>
        <Image 
        style={styles.img}
        source={require('../assets/tab5/Gudstjanst.png')}
        /> 
      </TouchableOpacity>
    </View>

    <View style={styles.box}>
    <TouchableOpacity onPress={()=> setVadskavisas('musik')}>
        <Image 
        style={styles.img}
        source={require('../assets/tab5/Musik.png')}
        /> 
      </TouchableOpacity>
    </View>

    <View style={styles.box}>
    <TouchableOpacity onPress={()=> setVadskavisas('barn')}>
        <Image 
        style={styles.img}
        source={require('../assets/tab5/Barn.png')}
        /> 
      </TouchableOpacity>
    </View>



    <View style={styles.box}>
    <TouchableOpacity onPress={()=> setVadskavisas('ungvux')}>
        <Image 
        style={styles.img}
        source={require('../assets/tab5/Vuxen.png')}
        /> 
      </TouchableOpacity>
    </View>
  </View>
</View>
          <View style={styles.textContainer}>
          <TabmenyText />
          </View>
        </View>
     
     <ScrollView>
        <FetchVerksamheter navigateReferens={props} vadskavisas={vadskavisas} />     
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
