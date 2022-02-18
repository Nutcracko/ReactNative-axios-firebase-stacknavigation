import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

//importing components of the screen
import TopBarComponent from "../Components/PostsScreen/TopBarComponent";
import PostsSection from "../Components/PostsScreen/PostsSection";

export default class PostScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //passing props to the children
    return (
      <View style={this.styles.container}>
        <TopBarComponent navigation={this.props.navigation} />
        <PostsSection navigation={this.props.navigation} />
      </View>
    );
  }

  //stylesheet for elements
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
