import React from 'react'
import {Text, View} from 'react-native'
import {Avatar, Button, Divider, Icon, ListItem} from 'react-native-elements';
import AvatarComponent from "./AvatarComponent";

export default class Profile extends React.Component{
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
          <Avatar
              icon={{
                name : "user",
                type : "font-awesome"
              }}
              size= "xlarge"

          />
          <Text
            style = {{
              textAlign: "right",
              alignSelf: "flex-end",
              position: "absolute",
              right: 0,
              fontSize: 42,
              lineHeight: 70
            }}
          >
            Username
          </Text>
          <Text
            style = {{
              textAlign: "right",
              alignSelf: "flex-end",
              position: "absolute",
              right: 0,
              fontSize: 20,
              top: 80
            }}
          >
            Quote
          </Text>
          <ListItem
            title = "Username"
          />
          <Divider/>
          <ListItem
              title = "Record"
          />
          <Divider/>
          <ListItem
              title = "Rating"
          />
          <Divider/>
          <ListItem
              title = "More Stats"
          />
          <Divider/>
        </View>
    )
  }
}