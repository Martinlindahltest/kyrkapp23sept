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
            tullingeJson: tullingeJson
          })
        });
    }



    

    render() {

        let arrayMedDatabasobjekt = this.state.tullingeJson
        let dagensDatum =new Date().toISOString()
        let jsxArray	 

        if(this.state.tullingeJson.length > 0){
            jsxArray = arrayMedDatabasobjekt.map(obj => {
                if(obj.Datum > dagensDatum){
                    let splitDatum = obj.Datum.split("T")[0]
                    let splitDatum2 = splitDatum.split('-')
                    console.log('splitDatum2', splitDatum2)

               // console.log('obj', obj)
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