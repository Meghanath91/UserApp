import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";

import LocationDetailsScreen from "./app/screens/LocationDetailsScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen from "./app/screens/RegisterScreen";
import navigationTheme from "./app/navigation/navigationTheme";
export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
