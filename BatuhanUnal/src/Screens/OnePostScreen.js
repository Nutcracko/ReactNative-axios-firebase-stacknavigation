import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

import TopBarComponent from "../Components/PostsScreen/TopBarComponent";
import PostBody from "../Components/OnePostScreen/PostBody";

export default class OnePostScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //passing props to child components
    return (
      <View style={this.styles.container}>
        <TopBarComponent navigation={this.props.navigation} />
        <PostBody navigation={this.props.navigation} route={this.props.route} />
      </View>
    );
  }

  //styles
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
