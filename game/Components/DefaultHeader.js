import {Button, Icon} from "react-native-elements";
import {Text} from 'react-native';
import Avatar from "./AvatarComponent";
import React from "react";

export function defaultNavigationOptions(navigation){
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
}
