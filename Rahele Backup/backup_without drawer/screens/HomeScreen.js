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
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: "yellow"
        }}
      >
        <Text>Home Screen</Text>
        <Button
          title="OPEN"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}
