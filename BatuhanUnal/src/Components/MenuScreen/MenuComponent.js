import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from "react";

//importing log-out controller
import { logoutUser } from "../../Controllers/authController";

export default class MenuComponent extends Component {
  constructor(props) {
    super(props);
  }

  //rendering menu div and menu buttons
  render() {
    return (
      <View style={this.styles.container}>
        <TouchableOpacity>
          <Text style={this.styles.text} onPress={() => this.postsButPressed()}>
            Posts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={this.styles.text}
            onPress={() => this.logoutButPressed()}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  //Styles for elements
  styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "85%",
      height: "100%",
    },
    text: {
      fontSize: 25,
      fontWeight: "500",
      borderRadius: 10,
      padding: "10%",
      borderColor: "black",
      backgroundColor: "orange",
      width: "100%",
      marginTop: "15%",
      textAlign: "center",
    },
  });

  //button onPress functions
  postsButPressed() {
    //navigate to postsscreen
    this.props.navigation.navigate("PostScreen");
  }
  logoutButPressed() {
    //logout user by calling controller
    logoutUser();
    alert("Logout Successfull!");
    //navigate to login screen
    this.props.navigation.navigate("LoginScreen");
  }
}
