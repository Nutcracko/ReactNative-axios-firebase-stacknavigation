import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

//importing login screen components
import LoginInputComponent from "../Components/LoginScreen/LoginInputComponent";
import LogoComponent from "../Components/LoginScreen/LogoComponent";
import { SafeAreaView } from "react-native-safe-area-context";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //logo component, Login screen text and
    return (
      <SafeAreaView style={styles.containerBase}>
        <View style={styles.container}>
          <LogoComponent></LogoComponent>
          <Text style={styles.text}>Login Screen</Text>
          <LoginInputComponent navigation={this.props.navigation} />
          <View></View>
        </View>
      </SafeAreaView>
    );
  }
}

//styles for elements
const styles = StyleSheet.create({
  containerBase: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    padding: "10%",
    borderRadius: 50,
    width: "85%",
    height: "80%",
  },
  text: {
    fontSize: 25,
    fontWeight: "normal",
  },
});
