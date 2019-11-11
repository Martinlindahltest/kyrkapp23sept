import React, { Component } from 'react';
import DisplayVerksamhet from './DisplayVerksamhet'
import { View, Text, StyleSheet } from 'react-native'
import Spacer from '../Components/Spacer'
import HeaderImageVerksamheter from '../Components/HeaderImageVerksamheter'



export default class FetchVerksamheter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }


        this.objectToJsx = this.objectToJsx.bind(this);

    }

    

    componentDidMount() {

        const jsonURL = 'https://tullinge.digitalindahl.com/wp-json/wp/v2/apiverksamhet/?per_page=100'
        fetch(jsonURL)
        .then(response => {
          return response.json();
        })
        .then(tullingeJson => {
            //console.log('setstate i fetchVerksamheter')

          this.setState({
            tullingeJson: tullingeJson
          })
        });
    }

    objectToJsx(inputObject){
        jsxObject = inputObject.map(obj => {
            return <DisplayVerksamhet key={obj.id} data={obj} navRef={this.props.navigateReferens} />
        })  
        return jsxObject  
    
    }




    render() {



        const styles = StyleSheet.create({
            datumRubrik: {
              fontWeight: "bold",
              backgroundColor: '#808080',
              padding: 10,
              fontFamily: 'avenir-roman',
              fontSize:17
            }

          });
          

        let verksamheterJsxArray = []
        let popularaVerksamheter = []
        let olikaDagarVerksamheter = []
        let mandagVerksamheter = []
        let tisdagVerksamheter = []
        let onsdagVerksamheter = []
        let torsdagVerksamheter = []
        let fredagVerksamheter = []
        let lordagVerksamheter = []
        let sondagVerksamheter = []


        if(this.state.tullingeJson){
            tullingeJson = this.state.tullingeJson
/*
            verksamheterJsxArray = tullingeJson.map(obj => {
                return <DisplayVerksamhet key={obj.id} data={obj} navRef={this.props.navigateReferens} />
            })
            
*/
            let x = tullingeJson.map(obj =>{
               // console.log('obj i acfApi', obj.acf.tillpopular)
                if(obj.acf.tillpopular == true){
                    popularaVerksamheter.push(obj)
                }
                if(obj.acf.dag == 8){
                    olikaDagarVerksamheter.push(obj)
                }      
                if(obj.acf.dag == 1){
                    mandagVerksamheter.push(obj)
                }
                if(obj.acf.dag == 2){
                    tisdagVerksamheter.push(obj)
                }      
                if(obj.acf.dag == 3){
                    onsdagVerksamheter.push(obj)
                }
                if(obj.acf.dag == 4){
                    torsdagVerksamheter.push(obj)
                }      
                if(obj.acf.dag == 5){
                    fredagVerksamheter.push(obj)
                }
                if(obj.acf.dag == 6){
                    lordagVerksamheter.push(obj)
                }      
                if(obj.acf.dag == 7){
                    sondagVerksamheter.push(obj)
                }                
            
            })

           // verksamheterJsxArray = this.objectToJsx(tullingeJson)

        }
       // let popularaVerksamheterJSX = this.objectToJsx(popularaVerksamheter)
        let olikaDagarVerksamheterJSX = this.objectToJsx(olikaDagarVerksamheter)
        let mandagVerksamheterJSX = this.objectToJsx(mandagVerksamheter)
        let tisdagVerksamheterJSX = this.objectToJsx(tisdagVerksamheter)
        let onsdagVerksamheterJSX = this.objectToJsx(onsdagVerksamheter)
        let torsdagVerksamheterJSX = this.objectToJsx(torsdagVerksamheter)
        let fredagVerksamheterJSX = this.objectToJsx(fredagVerksamheter)
        let lordagVerksamheterJSX = this.objectToJsx(lordagVerksamheter)
        let sondagVerksamheterJSX = this.objectToJsx(sondagVerksamheter)

        /**
         * 
         *                 <Text style={styles.datumRubrik}>Populära verksamheter</Text>
                {    popularaVerksamheterJSX}
         */

        //console.log('props i FV', this.props)


        let display =             <View>
        <HeaderImageVerksamheter text={'Verksamheter'} />
        <Text style={styles.datumRubrik}>Gudstjänster</Text>
        {mandagVerksamheterJSX}
        <Text style={styles.datumRubrik}>Musik/Konserter</Text>
        {tisdagVerksamheterJSX}
        <Text style={styles.datumRubrik}>Körer för vuxna</Text>
        {onsdagVerksamheterJSX}
        <Text style={styles.datumRubrik}>Körer för barn</Text>
        {torsdagVerksamheterJSX}
        <Text style={styles.datumRubrik}>Barnverksamheter</Text>
        {fredagVerksamheterJSX}
        <Text style={styles.datumRubrik}>Ungdomsverksamheter</Text>
        {lordagVerksamheterJSX}
        <Text style={styles.datumRubrik}>Vuxenverksamheter</Text>
        {sondagVerksamheterJSX}
    </View>

console.log('props i fetch versksamheter', this.props.vadskavisas)


    if(this.props.vadskavisas == 'gudstjanst'){
        display = <View>
                    <HeaderImageVerksamheter text={'Gudstjänstverksamheter'} />

                    <Text style={styles.datumRubrik}>Gudstjänster</Text>
        {mandagVerksamheterJSX}
        </View>
    }
    if(this.props.vadskavisas == 'musik'){
        display = <View>
            <HeaderImageVerksamheter text={'Musikverksamheter'} />

        <Text style={styles.datumRubrik}>Musik/Konserter</Text>
        {tisdagVerksamheterJSX}
</View>
    }
    if(this.props.vadskavisas == 'barn'){
        display = <View>
                    <HeaderImageVerksamheter text={'Barnverksamheter'} />

        <Text style={styles.datumRubrik}>Körer för barn</Text>
        {torsdagVerksamheterJSX}
</View>
    }
    if(this.props.vadskavisas == 'ungvux'){
        display = <View>
                        <HeaderImageVerksamheter text={'Ung/vuxenverksamheter'} />

        <Text style={styles.datumRubrik}>Ungdomsverksamheter</Text>
        {lordagVerksamheterJSX}
        <Text style={styles.datumRubrik}>Vuxenverksamheter</Text>
        {sondagVerksamheterJSX}
</View>

    }

        return (
            <View>

            {display}



                {
                   // verksamheterJsxArray
                    }
                    <Spacer hojd={100} />
            </View>
        )
    }
}