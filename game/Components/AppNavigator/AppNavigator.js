import {createAppContainer, createStackNavigator} from "react-navigation";
import HomeScreen from "../Pages/HomeScreen/HomeScreen";
import Avatar from "../AvatarComponent";
import Games from "../Games";
import React from "react";
import {Button, Icon} from "react-native-elements";
import Profile from "../Pages/Profile/Profile";
import SignupScreen from "../Pages/SignupScreen/SignupScreen";
import ActiveGame from "../Pages/ActiveGame/ActiveGame";

const AppNav = createStackNavigator(
    {
      Home: {screen: HomeScreen},
      Games: {screen: Games},
      Profile: {screen: Profile},
      Signup: {screen: SignupScreen},
      ActiveGame: {screen: ActiveGame}
    },
    {
      initialRouteName: "ActiveGame",
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
                    onPress={() => alert("Configure navigationOptions")}
                    title={null}
            />
        ),
        headerLeft: (
            <Button icon = {<Avatar/>}
                    onPress = {()=> alert("Configure navigationOptions")}
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
                onPress={() => alert("Configure navigationOptions")
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