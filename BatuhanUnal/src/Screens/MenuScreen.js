import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

//importing components of the screen
import TopBarComponent from "../Components/MenuScreen/TopBarComponent";
import MenuComponent from "../Components/MenuScreen/MenuComponent";

export default class MenuScreen extends Component {
  render() {
    //passing navigation object in props to the child component
    return (
      <View style={this.styles.container}>
        <TopBarComponent />
        <MenuComponent navigation={this.props.navigation} />
      </View>
    );
  }

  //styles for elements
  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
  });
}
