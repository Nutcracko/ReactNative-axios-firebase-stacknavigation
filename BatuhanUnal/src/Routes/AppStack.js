import * as React from "react";

//Importing navigation libs
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Importing Screens
import LoginScreen from "../Screens/LoginScreen";
import MenuScreen from "../Screens/MenuScreen";
import PostScreen from "../Screens/PostScreen";
import OnePostScreen from "../Screens/OnePostScreen";

//creating an instance of stack navigator
const Stack = createNativeStackNavigator();

//creating a stack navigator object for my app
const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="PostScreen" component={PostScreen} />
        <Stack.Screen name="OnePostScreen" component={OnePostScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

//exporting my stack
export default AppStack;
