import { ScrollView, RefreshControl } from 'react-native';
import { Component } from 'react'

//pull to refreshg gör denna

class TestaRefresh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  fetchData() {
      console.log('nu körs fetchData i TestaDataRefresh')
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      />
    );
  }
}