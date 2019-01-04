import React from 'react';
import Square from "./Square";
import {StyleSheet} from "react-native";

export default class Row extends React.Component{
  constructor(){
    super();
    this.state={
      loading: true,
      squareColor: "white"
    };
    this.props={
      row : [],
    };
  }
  componentDidMount(){
    this.setState({loading: false});
    this.setState({squareColor: this.props.squareColor})
  }
  componentDidUpdate(prevProps){
    if(this.props.squareColor !== prevProps.squareColor){
      this.setState({squareColor: this.props.squareColor})
    }
  }
  render(){
    return(
        this.props.row.map((r,i)=>(
            <Square squareColor = {this.state.squareColor} style = {stylesGrid.boxContainer} row = {i}/>
        ))
    )
  }
}


const stylesGrid = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
  },
});