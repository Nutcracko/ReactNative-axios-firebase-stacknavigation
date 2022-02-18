import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

export default class LogoComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.egg}>Egg</Text>
        <Text style={styles.forum}>Forum</Text>
      </View>
    );
  }
}

//Styles for logo texts
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  egg: {
    fontSize: 40,
    fontWeight: "bold",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 3,
    paddingHorizontal: 5,
    color: "orange",
  },
  forum: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
