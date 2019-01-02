import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Square from "./Square";
const rows = 25;
const cols = 25;
const marginHorizontal = 1;
const marginVertical = 1;
const width = 10;
const height = 10;
let board = Array(25*25).fill(0);

export default class Board extends React.Component {

  render() {
    return (
        <View style={stylesGrid.sectionContainer}>
          {
            board.map((b,i)=>(
                <Square style = {stylesGrid.boxContainer} id = {i}/>
            ))
          }
        </View>
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
