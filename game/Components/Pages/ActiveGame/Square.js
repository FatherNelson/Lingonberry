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
        this.props.row !== 0 ?
        <View style = {[styles.newRowContainer, Coloring]}>
          <Text>{this.props.row}</Text>
        </View>
        :
        <View style = {[styles.newRowContainer, Coloring]}>
          <Text>{this.props.row}</Text>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 15,
    width: 15,
    borderWidth:1,
    borderColor: "black",
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  newRowContainer:{
    backgroundColor: "white",
    height: 15,
    width: 15,
    borderWidth:1,
    borderColor: "black",
    flexWrap: "wrap",
    flexBasis: 15,
    justifyContent: "center",
    alignItems: "center"
  }
});