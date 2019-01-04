import React from 'react';
import {StyleSheet, View, Text} from "react-native";

let highlightColor = "white";
let boxColor = "black";
let Coloring = {
  backgroundColor: "black",
  boxColor: "white"
};
export default class Square extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      boxColor: "black",
      squareColor: "white",
      board: true,
      gamePiece: false
    };
  }
  pickBoxColor(){
      Coloring = {
        backgroundColor: this.state.squareColor,
        borderColor: "black"
      }
  }
  componentDidMount(){
    this.setState({loading:false});
    this.setState({squareColor: this.props.squareColor})
  }
  componentDidUpdate(prevProps){
    if(this.props.squareColor !== prevProps.squareColor){
      this.setState({squareColor: this.props.squareColor})
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