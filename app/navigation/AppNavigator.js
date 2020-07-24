import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import routes from "./routes";
import LocationDetailsScreen from "../screens/LocationDetailsScreen";
import UserDetailsScreen from "../screens/UserDetailsScreen";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

//to handle Tabs
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
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={35} />
        ),
      }}
    ></Tab.Screen>
    <Tab.Screen
      name={routes.LOCATION}
      component={LocationDetailsScreen}
      options={{
        tabBarLabel: "Location",
        tabBarIcon: ({ color }) => (
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
