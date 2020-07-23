import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import routes from "./routes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LocationDetailsScreen from "../screens/LocationDetailsScreen";
import UserDetailsScreen from "../screens/UserDetailsScreen";
import colors from "../config/colors";
const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colors.primary,
      inactiveTintColor: "gray",
      style: { backgroundColor: colors.white },
    }}
  >
    <Tab.Screen
      name={routes.USER}
      component={UserDetailsScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={35} />
        ),
      }}
    ></Tab.Screen>
    <Tab.Screen
      name={routes.LOCATION}
      component={LocationDetailsScreen}
      options={{
        tabBarLabel: "Location",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="home-map-marker"
            color={color}
            size={35}
          />
        ),
      }}
    ></Tab.Screen>
  </Tab.Navigator>
);
export default AppNavigator;
