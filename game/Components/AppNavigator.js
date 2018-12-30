import {createAppContainer, createStackNavigator} from "react-navigation";
import HomeScreen from "./HomeScreen";
import Avatar from "./AvatarComponent";
import Games from "./Games";
import React from "react";
import {Button, Icon} from "react-native-elements";
import Profile from "./Profile";
import SignupScreen from "./SignupScreen"

const AppNav = createStackNavigator(
    {
      Home: {screen: HomeScreen},
      Games: {screen: Games},
      Profile: {screen: Profile},
      Signup: {screen: SignupScreen}
    },
    {
      initialRouteName: "Home",
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
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
                    onPress = {()=> alert("You clicked my button!")}
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
    }
);
const AppNavigator= createAppContainer(AppNav);
export default AppNavigator;