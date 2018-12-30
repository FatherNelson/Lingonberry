import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';
import avatar from "../img/avatars/grant.jpg";

export default class AvatarComponent extends Component{
  render(){
    return (
      <Avatar size = 'small'
              rounded
              source = {avatar}
              title = '@bigbadbooger'
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',

  },
  thumbnail:{
    height: 50,
    width: 50,
    borderRadius: 25,
    marginBottom: 5
  },
});