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
      lat: '',
      lng: '',
      places_A: [],
      places_B: []
    }
  // }

  // componentWillMount(){
    geocodeAPI.getAddress().then((res) => {
      this.setState({
        lat: res.results[0].geometry.location.lat,
        lng: res.results[0].geometry.location.lng,
      })
    })

    geocodeAPI.getPlacesA().then((res) => {
      this.setState({
        places_A: res.results
      })
    })

    geocodeAPI.getPlacesB().then((res) => {
      this.setState({
        places_B: res.results
      })
    })

    // geocodeAPI.placesOverlap(){
    //   console.log("places overlap")
    // }

  }

  render() {
    console.log("lat: ", this.state.lat)
    console.log("lng: ", this.state.lng)
    console.log("places: ", this.state.places_A)
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
