import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import Square from "./Square";
import Board from "./Board";
import {Button, Icon} from "react-native-elements";
import Avatar from "../../AvatarComponent";
import GenerateBox from "../../GameEngine/GenerateBox";
import GamePiece from "./GamePiece";
import Draggable from "./Tutorials/Draggable";
import userAvatar from "../../../img/avatars/grant.jpg";
import opponentAvatar from "../../../img/avatars/santa.jpg";
import PinchZoomView from "react-native-pinch-zoom-view";
//This file contains the screen displayed to the user when they open up a game to play it.

export default class ActiveGame extends React.Component{
  constructor(){
    super();
    this.state = {
      loading: true,
      userScore: 0,
      opponentScore: 0
    }
  }
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: (
          <Button icon={<Icon color='black' clear={true} name='home'/>}
                  buttonStyle={
                    {
                      backgroundColor: 'transparent'
                    }
                  }
                  onPress={() => navigation.navigate("Home")}
                  title={null}
          />
      ),
      headerLeft:
          (
              <Button icon={<Avatar/>}
                      onPress={() => navigation.navigate("Profile")}
                      buttonStyle={
                        {
                          backgroundColor: 'transparent'
                        }
                      }
                      title={"bigbadbooger"}
              >

              </Button>
          ),
      headerRight:
          (
              <Button
                  icon=
                      {<Icon
                          color='black'
                          clear="true"
                          name='view-headline'/>}
                  onPress={() => navigation.navigate("Games")
                  }
                  buttonStyle={
                    {backgroundColor: 'transparent'}
                  }
                  title={null}
              />
          )
    }
  };
  componentDidMount(){
    if(this.state.loading === true){
      this.setState({loading: false});
    }
  }
  render(){
    return(
          <ScrollView>
            <View style = {styles.scoreBoard}>
              <Image style = {styles.leftThumbnail} source = {userAvatar}/>
              <Text style = {styles.scoreLine}>Score: {this.state.userScore} - {this.state.opponentScore}</Text>
              <Image style = {styles.rightThumbnail} source = {opponentAvatar}/>
            </View>
            <Board draggable = {false} zoomable = {true} rows = {25} cols = {25}/>
            <Text style = {styles.gamePiece}>The game piece is below me. Please style this section</Text>
            <GamePiece squareColor = {"blue"}/>
          </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scoreBoard:{
    marginBottom:20
  },
  scoreLine: {
    fontSize: 32,
    textAlign: "center",
  },
  gamePiece:{
    height: 50,
    alignContent: "center",
    textAlign: "center",
    marginTop: 20
  },
  rightThumbnail:{
    height: 50,
    width: 50,
    borderRadius: 20,
    position: "absolute",
    left: 0,
    top: 5
  },
  leftThumbnail:{
    height: 50,
    width: 50,
    borderRadius: 20,
    position: "absolute",
    right: 0,
    top: 5
  }
});