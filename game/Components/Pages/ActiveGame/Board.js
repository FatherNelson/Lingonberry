import React from 'react';
import {View, StyleSheet, Text, Animated, PanResponder} from 'react-native';
import Square from "./Square";
import Row from "./Row"
import PinchZoomView from "react-native-pinch-zoom-view";

export default class Board extends React.Component {
  constructor(){
    super();
    this.state = {
      draggable: false,
      zoomable: false,
      loading: true,
      pan     : new Animated.ValueXY()   //Step 1
    }
  }
  componentDidMount(){
    this.setState({loading: false});
    if(this.props.draggable = true){
      this.setState({draggable: true})
    }
    if(this.props.zoomable = true){
      this.setState({zoomable: true})
    }
  }
  render() {
    //TODO: Figure out which of these we need
    const rows = this.props.rows;
    const cols = this.props.cols;
    const row_array = Array(this.props.rows).fill(0);
    const col_array = Array(this.props.cols).fill(0);
    const board = Array(rows*cols).fill(0);
    if(this.props.zoomable) {
      return (
          <PinchZoomView maxScale={1.5}>
            {col_array.map((c, k) => (
              <View style={stylesGrid.sectionContainer}>
                <Row row={row_array}/>
              </View>
              ))
            }
          </PinchZoomView>
      );
    }
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
