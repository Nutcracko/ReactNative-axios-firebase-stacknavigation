import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";

//importing controllers for authentication processes
import { loginUser, registerUser } from "../../Controllers/authController";
import { useNavigation } from "@react-navigation/native";

export default class LoginInputComponent extends Component {
  constructor(props) {
    super(props);

    //setting initial values to none at the constructor
    this.state = {
      email: "",
      password: "",
    };
  }

  //rendering login input fields and buttons
  render() {
    return (
      <View style={this.styles.container}>
        <Text style={this.styles.text}>E-mail:</Text>
        <TextInput
          placeholder="E=mail..."
          onChangeText={(emailText) =>
            this.setState({
              email: emailText,
            })
          }
          value={this.state.email}
          style={this.styles.inputfield}
        ></TextInput>
        <Text style={this.styles.text}>Password:</Text>
        <TextInput
          placeholder="Password..."
          onChangeText={(passText) =>
            this.setState({
              password: passText,
            })
          }
          value={this.state.password}
          secureTextEntry={true}
          style={this.styles.inputfield}
        ></TextInput>
        <View style={this.styles.container2}>
          <TouchableOpacity onPress={async () => await this.onLoginButClick()}>
            <Text style={this.styles.butText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              onPress={() => this.onRegisterButClick()}
              style={this.styles.butText}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  //Login button click => logging the user in to the firebase
  onLoginButClick = async function () {
    const user = await loginUser(this.state.email, this.state.password);
    if (user !== undefined) {
      this.props.navigation.navigate("MenuScreen");
    }
    return;
  };

  //Register button click => registering user to the firebase
  onRegisterButClick = async function () {
    await registerUser(this.state.email, this.state.password);
  };

  //stylesheet for elements
  styles = StyleSheet.create({
    container: {
      marginTop: "15%",
      alignItems: "center",
      justifyContent: "center",
    },
    container2: {
      marginTop: "15%",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      flexDirection: "row",
    },
    inputfield: {
      width: 200,
      height: 50,
      borderRadius: 20,
      borderColor: "black",
      borderWidth: 3,
      backgroundColor: "white",
      paddingHorizontal: 10,
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
    },
    butText: {
      fontSize: 25,
      fontWeight: "bold",
      backgroundColor: "black",
      padding: 15,
      marginHorizontal: 10,
      borderColor: "white",
      borderRadius: 15,
      color: "white",
    },
  });
}
