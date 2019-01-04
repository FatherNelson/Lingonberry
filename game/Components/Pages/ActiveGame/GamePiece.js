import React from 'react';
import GenerateBox from "../../GameEngine/GenerateBox";
import Square from "./Square";
import Board from "./Board";
import {Animated, PanResponder, View, Dimensions, StyleSheet} from "react-native";
import Row from "./Row";
let Window = Dimensions.get('window');
export default class GamePiece extends React.Component {
  constructor(){
    super();
    this.state = {
      pan     : new Animated.ValueXY()   //Step 1
    };
    this.panResponder = PanResponder.create({    //Step 2
      onStartShouldSetPanResponder : () => true,
      onPanResponderMove           : Animated.event([null,{ //Step 3
        dx : this.state.pan.x,
        dy : this.state.pan.y
      }]),
      onPanResponderRelease        : (e, gesture) => {} //Step 4
    });
  }
  isDropZone(gesture){
    var dz = this.state.dropZoneValues;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }
  setDropZoneValues(event){
    this.setState({
      dropZoneValues : event.nativeEvent.layout
    });
  }
  renderDraggable(row_array, col_array){
    return(
        <Animated.View style = {[stylesGrid.animation, this.state.pan.getLayout()]} {...this.panResponder.panHandlers}>
          {
            col_array.map((c, k) => (
                <View style={stylesGrid.sectionContainer}>
                  <Row squareColor = {this.props.squareColor} row={row_array}/>
                </View>
            ))
          }
        </Animated.View>
    )
  }

  render(){
    const roll = GenerateBox.getBox();
    const row_array = Array(roll.rows).fill(0);
    const col_array = Array(roll.cols).fill(0);
    return(
        <View>
          {this.renderDraggable(row_array, col_array)}
        </View>
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
  mainContainer: {
    flex    : 1
  },
  dropZone    : {
    height  : 100,
    backgroundColor:'#2c3e50'
  },
  text        : {
    marginTop   : 25,
    marginLeft  : 5,
    marginRight : 5,
    textAlign   : 'center',
    color       : '#fff'
  },
  draggableContainer: {
    position    : 'absolute',
    top         : Window.height/2,
    left        : Window.width/2,
  },
  animation:{
    // backgroundColor: "black" //This will show you the actual confines of the draggable area.
  }
});
