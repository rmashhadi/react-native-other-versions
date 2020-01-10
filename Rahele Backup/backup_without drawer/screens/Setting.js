import React, { Component } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight
} from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    drawerLable: "Details"
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: "tomato"
        }}
      >
        <Text>Setting</Text>
      </View>
    );
  }
}
