import React from 'react';
import Square from "./Square";
import {StyleSheet} from "react-native";

export default class Row extends React.Component{
  constructor(){
    super();
    this.props={
      row : []
    };
  }
  render(){
    return(
        this.props.row.map((r,i)=>(
            <Square style = {stylesGrid.boxContainer} row = {i}/>
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