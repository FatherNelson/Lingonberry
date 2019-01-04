/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import AppNavigator from './Components/AppNavigator/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
        <AppNavigator/>
    )
  }
}

const style = StyleSheet.create({
  nothing: {
    alignSelf: 'center'
  }
});


