import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button, Icon, ListItem, Divider} from 'react-native-elements';
import PersonalAvatar from "./AvatarComponent";
// import DefaultHeader from "./DefaultHeader"
let navObject;
//TODO: Solve dynamically loading images for the avatars: https://stackoverflow.com/questions/44991669/react-native-require-with-dynamic-string
const list = [
  {
    name: "Santa",
    leftAvatar: "../img/avatars/santa.jpg",
    subtitle: "Rank 15"
  },
  {
    name: "Grinch",
    leftAvatar: "../img/avatars/grinch.jpg",
    subtitle: "Rank 12"
  }
];
export default class Games extends Component{
  static navigationOptions = ({navigation}) =>
  {
    navObject = navigation;
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
          <Button icon = {<PersonalAvatar/>}
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
          {typeof(navObject) !== "undefined" && typeof(list[0].leftAvatar) !== "undefined" ?
                list.map((l, i) => (
                  <View>
                    <Divider/>
                      <ListItem
                          key={i}
                          leftAvatar={{ source: require('../img/avatars/santa.jpg')}}
                          rightTitle = "Record: "
                          rightSubtitle = "Last Played: "
                          title={l.name}
                          subtitle={l.subtitle}
                          chevronColor = "#A2B066"
                          chevron
                          onPress = {()=>{this.props.navigation.navigate("ActiveGame")}}
                      />
                    <Divider key = {i}/>
                  </View>
              ))
              :
              null
          }
        </View>
    )
  }
}