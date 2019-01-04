import React from 'react';
import {StyleSheet, View, Text} from "react-native";

let highlightColor = "white";
let boxColor = "black";
let Coloring = {
  backgroundColor: "black",
  boxColor: "white"
};
export default class Square extends React.Component{
  constructor(){
    super();
    this.state = {
      boxColor: "black",
      highlightColor: "white"
    };
    this.props = {
      newRow: false
    }
  }

  pickBoxColor(){
    if(this.props.id > 605 && this.props.id < 609 || this.props.id > 580 && this.props.id < 584){
      Coloring = {
        backgroundColor: "red",
        borderColor: "red"
      }
    }
    else{
      Coloring = {
        backgroundColor: "white",
        borderColor: "black"
      }
    }
  }
  render(){
    this.pickBoxColor();
    return(
        <View style = {[styles.container, Coloring]}/>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 12,
    width: 12,
    borderWidth:1,
    borderColor: "black",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  }
});