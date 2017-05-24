/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import geocodeAPI from './utilities/geocodeAPI';

export default class REACT extends Component {

  constructor(props){
    super(props);
    this.state = {
      postcode: '',
      address: [],
      lat: '',
      id: ''
    }
  }

  componentWillMount(){
    geocodeAPI.getAddress().then((res) => {
      this.setState({
        address: res.results,
        lat: res.results[0].geometry.location.lat,
        id: res.results[0].place_id
      })
    });
  }

  render() {
    console.log("address based on postcode: ", this.state.address)
    console.log("id: ", this.state.id)
    console.log("lat: ", this.state.lat)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('REACT', () => REACT);
