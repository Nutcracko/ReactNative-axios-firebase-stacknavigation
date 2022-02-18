import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";

import React, { Component } from "react";
import axios from "axios";

export default class PostBody extends Component {
  constructor(props) {
    super(props);

    //initial state creation
    //setting itemid from parent route params id
    this.state = {
      itemid: this.props.route.params.itemid,
      isLoading: true,
      postdata: {},
    };
  }
  componentDidMount() {
    //sending get request with specified itemid
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.state.itemid}`)
      .then((data) => {
        this.setState({
          postdata: data.data,
        });
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  }
  render() {
    //post title, userid and postid, post body respectively
    return (
      <View style={this.styles.container}>
        {this.state.isLoading ? (
          <ActivityIndicator style={this.styles.activityIndicator} />
        ) : (
          <View style={this.styles.div}>
            <Text style={this.styles.title}>
              Title: {this.state.postdata.title}
            </Text>
            <Text style={this.styles.userId}>
              User id: {this.state.postdata.userId} | Post id:
              {this.state.postdata.id}
            </Text>
            <Text style={this.styles.body}>{this.state.postdata.body}</Text>
          </View>
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
    div: {
      flex: 1,
      width: "100%",
    },
    activityIndicator: {
      width: "30%",
      height: "30%",
    },
    title: {
      backgroundColor: "gray",
      fontWeight: "bold",
      fontSize: 24,
      borderRadius: 5,
      borderWidth: 4,
      padding: 4,
      marginTop: 10,
    },
    userId: {
      backgroundColor: "#e3bb71",
      fontSize: 20,
      fontWeight: "bold",
      borderRadius: 5,
      borderWidth: 4,
      padding: 4,
      marginTop: 10,
      borderColor: "orange",
    },
    body: {
      fontSize: 17,
      borderRadius: 5,
      borderWidth: 2,
      padding: 4,
      marginTop: 10,
    },
  });
}
