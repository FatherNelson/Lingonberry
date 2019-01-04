import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Square from "./Square";
import Row from "./Row"
import PinchZoomView from "react-native-pinch-zoom-view";

export default class Board extends React.Component {

  render() {
    //TODO: Figure out which of these we need
    const rows = this.props.rows;
    const cols = this.props.cols;
    const row_array = Array(this.props.rows).fill(0);
    const col_array = Array(this.props.cols).fill(0);
    const board = Array(rows*cols).fill(0);
    return (
      <PinchZoomView>
        {
          col_array.map((c, k) => (
              <View style={stylesGrid.sectionContainer}>
                <Row row={row_array}/>
              </View>
          ))
        }
      </PinchZoomView>
    );
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
