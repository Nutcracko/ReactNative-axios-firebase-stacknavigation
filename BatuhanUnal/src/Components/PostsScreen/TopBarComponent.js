import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from "react";

//topbar component with back button and location text
export default class TopBarComponent extends Component {
  render() {
    //Back button and top bar location indenting text
    return (
      <View style={this.styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text style={this.styles.backtxt}>Back</Text>
        </TouchableOpacity>
        <Text style={this.styles.text}>Posts</Text>
      </View>
    );
  }

  //styles for the elements used in screen
  styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "orange",
      width: "100%",
      height: 80,
      alignItems: "flex-end",
      justifyContent: "space-between",
      paddingBottom: 10,
    },
    backtxt: {
      backgroundColor: "black",
      color: "white",
      borderRadius: 10,
      padding: 5,
      fontSize: 25,
      marginLeft: 15,
    },
    text: {
      fontSize: 25,
      fontWeight: "bold",
      padding: 5,
      marginRight: "42%",
    },
  });
}
