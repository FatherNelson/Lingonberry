import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Square from "./Square";
import Board from "./Board";
import {Button, Icon} from "react-native-elements";
import Avatar from "../../AvatarComponent";
export default class ActiveGame extends React.Component{
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
  render(){
    return(
        <ScrollView>
          <Text style = {styles.scoreBoard}>Score: 55 - 137</Text>
          <Board/>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scoreBoard: {
    fontSize: 32
  }
});