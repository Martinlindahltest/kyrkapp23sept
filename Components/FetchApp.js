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
                let arrayMedDatabasobjekt = tullingeJson.value.sort(function (a, b) {
                    return (a.StartTime < b.StartTime) ? -1 : ((a.StartTime > b.StartTime) ? 1 : 0);
                });

                const regex = /<[^>]*>/g
                const lineBreakRegex = /<BR \/>/g


                function strReplace(text) {
                    let tvattadText = null
                    if (text != null) {
                        tvattadText = text.replace(lineBreakRegex, "\n")
                        tvattadText = tvattadText.replace(regex, " ")
                        // tvattadText = tvattadText.replace('LineBreakÖnskas', "\n")

                    }
                    return tvattadText
                }

                function siffratilldag(siffra) {
                    let dagnamn = ['sön', 'mån', 'tis', 'ons', 'tor', 'fre', 'lör']
                    return dagnamn[siffra]
                }

                //Skapar data som liknar den gamla
                arrayMedDatabasobjekt = arrayMedDatabasobjekt.map(obj => {
                    let verksamhetskoder = obj.CalendarSubGroups.map(objIArray => {
                        return objIArray.Id
                    })

                    //console.log(obj.Title, 'kod:', verksamhetskoder)

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
                        Verksamhetstyp: verksamhetskoder,
                        starttid: obj.StartTime.slice(11, 16),
                        uuid: obj.Id,


                    }


                })

                // Gudstjänst & mässa (Gtj) 101
                // Musik & kör (Musik) 105

                // Barnverksamhet (Barn) 104

                // Drop-in (Vuxen) 111
                // Konst & Kultur (Vuxen)
                // Kropp & själ (Vuxen) 
                // Mötas & umgås (Vuxen) 102
                // Skapande & kreativitet (Vuxen)
                // Studier & samtal (Vuxen)
                // Stöd & omsorg (Vuxen)
                // Ungdomsverksamhet (Vuxen) 110


                let GtjArray = []
                let MusikArray = []
                let BarnArray = []
                let VuxenArray = []


                arrayMedDatabasobjekt.forEach(pushTillGtj)
                arrayMedDatabasobjekt.forEach(pushTillMusik)
                arrayMedDatabasobjekt.forEach(pushTillBarn)
                arrayMedDatabasobjekt.forEach(pushTillVuxen)



                function pushTillGtj(input) {
                    //console.log('input', input.Verksamhetstyp)
                    if (input.Verksamhetstyp[0] === 101) {
                        GtjArray.push(input)
                    }
                    if (input.Verksamhetstyp[1] === 101) {
                        GtjArray.push(input)
                    }
                }

                function pushTillMusik(input) {
                    //console.log('input', input.Verksamhetstyp)
                    if (input.Verksamhetstyp[0] === 105) {
                        MusikArray.push(input)
                    }
                    if (input.Verksamhetstyp[1] === 105) {
                        MusikArray.push(input)
                    }
                }

                function pushTillBarn(input) {
                    //console.log('input', input.Verksamhetstyp)
                    if (input.Verksamhetstyp[0] === 102) {
                        VuxenArray.push(input)
                    }
                    if (input.Verksamhetstyp[0] === 110) {
                        VuxenArray.push(input)
                    }
                    if (input.Verksamhetstyp[0] === 111) {
                        VuxenArray.push(input)
                    }
                    if (input.Verksamhetstyp[1] === 102) {
                        VuxenArray.push(input)
                    }
                    if (input.Verksamhetstyp[1] === 110) {
                        VuxenArray.push(input)
                    }
                    if (input.Verksamhetstyp[1] === 111) {
                        VuxenArray.push(input)
                    }
                }

                function pushTillVuxen(input) {
                    //console.log('input', input.Verksamhetstyp)
                    if (input.Verksamhetstyp[0] === 104) {
                        BarnArray.push(input)
                    }
                    if (input.Verksamhetstyp[1] === 104) {
                        BarnArray.push(input)
                    }
                }




                //console.log('gtjarray', GtjArray.length)

                //console.log('arrayMedDatabasobjekt', arrayMedDatabasobjekt)

                if (this.props.KategoriFilter === 'Gtj') {
                    arrayMedDatabasobjekt = GtjArray
                }
                if (this.props.KategoriFilter === 'Barn') {
                    arrayMedDatabasobjekt = BarnArray
                }
                if (this.props.KategoriFilter === 'Vuxen') {
                    let nyArrayUtanDupl = [...new Set(VuxenArray)];

                    arrayMedDatabasobjekt = nyArrayUtanDupl
                    console.log('lenght', nyArrayUtanDupl.length)
                }
                if (this.props.KategoriFilter === 'Musik') {
                    arrayMedDatabasobjekt = MusikArray

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

        if (this.state.isLoading == false) {
            jsxArray = this.state.tullingeJson.map(obj => {
                if (obj.Datum >= dagensDatum || obj.Datum == dagensDatum) {
                    let splitDatum = obj.Datum.split("T")[0]
                    let splitDatum2 = splitDatum.split('-')

                    return <Display key={obj.uuid} data={obj} navRef={this.props.navigateReferens} objektetsMånad={splitDatum2[1]} objektetsDag={splitDatum2[2]} />
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