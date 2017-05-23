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

import api from './utilities/nasaApi';
// import mapsAPI from './utilities/mapsApi';

export default class REACT extends Component {

  constructor(props){
    super(props);
    this.state = {
      // pizza: {},
      rover: []
    }
  }

  componentWillMount(){
    // mapsAPI.getPizza().then((res) => {
    //   this.setState({
    //     pizza: res.pizza,
    //   })
    // });

    api.getRovers().then((res) => {
      this.setState({
        rover: res.rover,
      })
    });
  }

  render() {
    // console.log("Pizza: ", this.state.pizza)
    console.log("Rover: ", this.state.rover)
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
