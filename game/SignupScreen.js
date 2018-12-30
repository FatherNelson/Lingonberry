import React from 'react';
import {Text, View} from 'react-native'
import {Button, Icon} from "react-native-elements";
import AvatarComponent from "./AvatarComponent";

export default class SignupScreen extends React.Component{
  static navigationOptions = ({navigation}) =>
  {
    return {
      headerTitle: (
          <Button icon={<Icon color='black'  name='home'/>}
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
          <Button icon = {<AvatarComponent/>}
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
              title = {null}
          />
      )
    }
  };
  render(){
    return(
        <View>
          <Text>Hello</Text>
        </View>
    )
  }
}