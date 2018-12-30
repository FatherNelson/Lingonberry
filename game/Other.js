import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';


export default class Other extends Component{
  render(){
    return (
        <View style = {{display: 'none'}}>
          <Icon name = 'home'/>
          <Text>I am the other page</Text>
        </View>
    )
  }
}