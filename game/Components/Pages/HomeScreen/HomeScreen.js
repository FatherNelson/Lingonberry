import React, {Component} from "react";
import {Image, Platform, StyleSheet, Text, View} from "react-native";
import {Button, Icon} from "react-native-elements";
import Avatar from "../../AvatarComponent";


export default class HomeScreen extends Component<Props> {
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
  render() {
    return (
        <View style = {styles.container}>
          {/*TODO: Do not show the button to sign up if we are logged in */}
          <Button buttonStyle = {styles.signupButton}
                  title = "Sign Up"
                  containerStyle = {{width:"100%"}}
                  onPress = {()=> this.props.navigation.navigate("Signup")}
          />
          <View style = {styles.container}>
            <View style = {styles.container}>
              <Image source = {require('../../../img/SquaresLogo.png')}/>
              <Text style={styles.welcome}>SQUARES</Text>
              <Text style={styles.instructions}>Click Above To Play Now!</Text>
              <Text style={styles.instructions}>{instructions}</Text>
              <Button onPress = {()=> this.props.navigation.navigate('Games')}
                      title = "Click Here To Play Now!"/>
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    borderStyle: 'solid',
    borderColor: '#000000'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  banner:{
    display: 'flex',
    flex: 1,
    flexBasis: "80%"
  },
  signupButton:{
    justifyContent: "flex-start",
    alignSelf: "stretch",
    backgroundColor: '#123456',
    width: "100%"
  }
});

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
});
