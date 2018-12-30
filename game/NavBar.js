/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Avatar from "./AvatarComponent";
import HomeIcon from "./HomeIcon";
import Games from "./Games";
import {Header} from "react-native-elements";

export default class NavBar extends React.Component {
  render() {
    return (
        <Header
            placement = "center"
            leftComponent= {<Avatar/>}
            centerComponent={<HomeIcon/>}
            rightComponent={<Games/>}
        />
    )
  }
}



