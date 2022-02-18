import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { Component } from "react";

export default class TopBarComponent extends Component {
  render() {
    return (
      <View style={this.styles.container}>
        <Text style={this.styles.text}>Menu</Text>
      </View>
    );
  }

  //Styles for elements
  styles = StyleSheet.create({
    container: {
      display: "flex",
      backgroundColor: "orange",
      width: "100%",
      height: "12%",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingBottom: "4%",
    },
    text: {
      fontSize: 25,
      fontWeight: "bold",
    },
    image: {
      width: 200,
      height: 200,
    },
  });
}
