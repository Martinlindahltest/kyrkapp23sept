import React, { Component } from 'react';
import Display from './Display';
import { View, Text, Button } from 'react-native'
import dbURL from '../dbConfig/dbUrl'
import Spacer from '../Components/Spacer'



class FetchApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tullingeJson: [],
            isLoading: true
        }



    }

    componentDidMount() {

        //console.log('FetchAppProps', this.props.KategoriFilter)


        const jsonURL = dbURL

        fetch(jsonURL)
        .then(response => {
          return response.json();
        })
        .then(tullingeJson => {
            if(this.props.KategoriFilter === 'Gtj'){
                 tullingeJson = tullingeJson.filter(obj => obj.Verksamhetstyp === 'Gtj');
            }
            if(this.props.KategoriFilter === 'Barn'){
                tullingeJson = tullingeJson.filter(obj => obj.Verksamhetstyp === 'Barn');
           }
           if(this.props.KategoriFilter === 'Vuxen'){
            tullingeJson = tullingeJson.filter(obj => obj.Verksamhetstyp === 'Vuxen');
           }
            if(this.props.KategoriFilter === 'Musik'){
                tullingeJson = tullingeJson.filter(obj => obj.Verksamhetstyp === 'Musik');
    
       }


          this.setState({
            tullingeJson: tullingeJson,
            isLoading: false
          })
        });
    }



    

    render() {
        if(this.state.isLoading == false){

        let arrayMedDatabasobjekt = this.state.tullingeJson.value.map(obj => {
            return {
                Aktivitet: "Adventsgudstjänst",
                Dag: "Söndag",
                Datum: obj.StartTime,
                Internnotering: "Fackeltåg från Tullinge gård.",
                Lokal: "Tullinge kyrka",
                Musiker: null,
                Personal: null,
                Pr_st: "Eva Ajaxén & Peter Johansson",
                StartSlut: "16.00-17.00",
                Vaktm_stare: null,
                Verksamhetstyp: "Gtj",
                starttid: "16.00",
                uuid: "5cbded96-bb66-4fd3-9679-0b8e284ea9e0"
            }
        })

        console.log(arrayMedDatabasobjekt)
        //let dagensDatum =new Date().toISOString() 
        //dagensDatum är nu gårdagens datum
        var d = new Date();
        d.setDate(d.getDate() - 1);
        let dagensDatum = d.toISOString()
    

    }
        let jsxArray	 

        if(this.state.tullingeJson.length > 0){
            jsxArray = arrayMedDatabasobjekt.map(obj => {
                if(obj.Datum >= dagensDatum || obj.Datum == dagensDatum){
                    let splitDatum = obj.Datum.split("T")[0]
                    let splitDatum2 = splitDatum.split('-')

               return <Display key={obj.uuid} data={obj} navRef={this.props.navigateReferens} objektetsMånad={splitDatum2[1]} objektetsDag={splitDatum2[2]}   />
            }

            })

        }
        
    




     //   console.log('dburl i FA', this.dbURL)

        return (
            <View>
                                {jsxArray}
                                <Spacer hojd={100} />


            </View>
        );
    }
}

export default FetchApp;