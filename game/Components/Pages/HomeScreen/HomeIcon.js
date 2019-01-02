import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Icon} from 'react-native-elements';


export default class HomeIcon extends Component{
  render(){
    return (
        <View>
          <Button icon = {<Icon clear = {true} name = 'home'/>}
                  onPress = {()=> this.props.navigation.navigate('Home')}
                  title = {null}
          />
        </View>
    )
  }
}