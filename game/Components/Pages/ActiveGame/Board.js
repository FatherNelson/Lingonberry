import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Square from "./Square";
import Row from "./Row"
// let rows = 25;
// let cols = 25;
const marginHorizontal = 1;
const marginVertical = 1;
const width = 10;
const height = 10;
let board = Array(25*25).fill(0);

export default class Board extends React.Component {

  render() {
    const rows = this.props.rows;
    const cols = this.props.cols;
    const row_array = Array(this.props.rows).fill(0);
    const col_array = Array(this.props.cols).fill(0);
    const board = Array(rows*cols).fill(0);
    return (
      col_array.map((c,k)=>(
        <View style={stylesGrid.sectionContainer}>
          <Row row = {row_array}/>
        </View>
      ))
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
    marginTop: marginVertical,
    marginBottom: marginVertical,
    marginLeft: marginHorizontal,
    marginRight: marginHorizontal,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
  },
});
