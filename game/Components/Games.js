import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import Avatar from "./AvatarComponent";
// import DefaultHeader from "./DefaultHeader"

//TODO: Figure out if you want to override the back button
export default class Games extends Component{
  static navigationOptions = ({navigation}) =>
  {
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
      headerLeft: (
          <Button icon = {<Avatar/>}
                  onPress = {()=> navigation.navigate("Profile")}
                  buttonStyle={
                    {
                      backgroundColor: 'transparent'
                    }
                  }
                  title = {"bigbadbooger"}
          >

          </Button>
      ),
      headerRight: (
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
    return (
        <View>
          <Text>This is the game section</Text>
        </View>
    )
  }
}