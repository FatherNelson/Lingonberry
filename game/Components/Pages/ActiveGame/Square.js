import React from 'react';
import {StyleSheet, View} from "react-native";

export default class Square extends React.Component{

  render(){
    return(
        <View style = {styles.container}/>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    height: 15,
    width: 15,
    borderWidth:5,
    borderColor: "white",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});