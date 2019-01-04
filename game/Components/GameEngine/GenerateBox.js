import React from 'react';
import {View} from 'react-native';
import Board from "../Pages/ActiveGame/Board";

let roll = {
  height: 1,
  width: 1,
};

export default class GenerateBox extends React.Component{
  constructor(){
    super();
  }
  static getBox(){
    roll.rows = Math.floor(Math.random() * 6) + 1;
    roll.cols = Math.floor(Math.random() * 6) + 1;
    return roll;
  }
  render(){
    return(
        <View></View>
    )
  }
  // render(){
  //   return(
  //     <Board rows = {roll.width} cols = {roll.height}/>
  //   )
  // }
}