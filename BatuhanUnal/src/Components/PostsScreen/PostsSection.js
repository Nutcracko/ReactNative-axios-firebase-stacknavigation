import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { Component, useState, useEffect } from "react";

//importing  axios for get request
import axios from "axios";

export default class PostsSection extends Component {
  constructor(props) {
    super(props);

    //initially creating state
    this.state = {
      isLoading: true,
      postdata: [],
    };
  }

  //after component mount sending get request and updating state
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        this.setState({
          postdata: data.data,
        });
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  }
  render() {
    // returning activity indicator until loading posts and then returning posts
    return (
      <View style={this.styles.container}>
        {this.state.isLoading ? (
          <ActivityIndicator style={this.styles.activityIndicator} />
        ) : (
          <FlatList
            style={this.styles.flatlistcomp}
            data={this.state.postdata}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("OnePostScreen", {
                    itemid: item.id,
                  });
                }}
              >
                <Text style={this.styles.title}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    );
  }

  //styles for elements
  styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "95%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    flatlistcomp: {
      flex: 1,
      width: "100%",
    },
    activityIndicator: {
      width: "30%",
      height: "30%",
    },
    title: {
      fontSize: 24,
      borderRadius: 5,
      borderWidth: 2,
      padding: 4,
      marginTop: 10,
    },
  });
}
