import React from 'react';
import GenerateBox from "../../GameEngine/GenerateBox";
import Square from "./Square";
import Board from "./Board";
export default class GamePiece extends React.Component {
  constructor(){
    super();
  }
  render(){
    const roll = GenerateBox.getBox();
    return(
        <Board rows = {roll.width} cols = {roll.height}/>
    )
  }
}