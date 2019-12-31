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


           //Sorterar i datumordning
           let arrayMedDatabasobjekt = tullingeJson.value.sort(function(a, b) {
        return (a.StartTime < b.StartTime) ? -1 : ((a.StartTime > b.StartTime) ? 1 : 0);
    });

    const regex = /<[^>]*>/g

    
    function strReplace(text) {
        let tvattadText = null
        if (text != null){
            tvattadText = text.replace(regex, " ")
        }
        return tvattadText
    }

    function siffratilldag(siffra) {
        let dagnamn = ['sön', 'mån', 'tis', 'ons', 'tor', 'fre', 'lör']
        return dagnamn[siffra]
    }

       //Skapar data som liknar den gamla
        arrayMedDatabasobjekt = arrayMedDatabasobjekt.map(obj => {

            return {
            Aktivitet: obj.Title,
            Datum: obj.StartTime,
            Dag: siffratilldag(new Date(obj.StartTime).getDay()),
            Internnotering: strReplace(obj.Description),
            Lokal: obj.Place.Name,
            Musiker: null,
            Personal: null,
            Pr_st: null,
            StartSlut: obj.StartTime,
            Vaktm_stare: null,
            Verksamhetstyp: obj.CalendarSubGroups,
            starttid: obj.StartTime.slice(11, 16),
            uuid: obj.Id,

        }


    })

    console.log('arrayMedDatabasobjekt', arrayMedDatabasobjekt)

    if(this.props.KategoriFilter === 'Gtj'){
        arrayMedDatabasobjekt = arrayMedDatabasobjekt.filter(obj => obj.Verksamhetstyp === 'Gudstjänst & mässa');
   }
   if(this.props.KategoriFilter === 'Barn'){
    arrayMedDatabasobjekt = arrayMedDatabasobjekt.filter(obj => obj.Verksamhetstyp === 'Barn');
  }
  if(this.props.KategoriFilter === 'Vuxen'){
    arrayMedDatabasobjekt = arrayMedDatabasobjekt.filter(obj => obj.Verksamhetstyp === 'Vuxen');
  }
   if(this.props.KategoriFilter === 'Musik'){
    arrayMedDatabasobjekt = arrayMedDatabasobjekt.filter(obj => obj.Verksamhetstyp === 'Musik');

}



       // console.log(arrayMedDatabasobjekt)
          this.setState({
            tullingeJson: arrayMedDatabasobjekt,
            isLoading: false
          })
        });
    }



    render() {

        //dagensDatum är nu gårdagens datum
        var d = new Date();
        d.setDate(d.getDate() - 1);
        let dagensDatum = d.toISOString()


        let jsxArray	 

        if(this.state.isLoading == false){
            jsxArray = this.state.tullingeJson.map(obj => {
                if(obj.Datum >= dagensDatum || obj.Datum == dagensDatum){
                    let splitDatum = obj.Datum.split("T")[0]
                    let splitDatum2 = splitDatum.split('-')

               return <Display key={obj.uuid} data={obj} navRef={this.props.navigateReferens} objektetsMånad={splitDatum2[1]} objektetsDag={splitDatum2[2]}   />
            }

            })

        }

        return (
            <View>
                                {jsxArray}
                                <Spacer hojd={100} />


            </View>
        );
    }
}

export default FetchApp;