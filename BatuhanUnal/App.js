import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

//importing navigator
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./src/Routes/AppStack";

//Starting app with Login Screen and turning status bar dark mode
export default function App() {
  console.log("App started.");
  return (
    <NavigationContainer>
      <AppStack />
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}
