import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

//to implement stable layout
export default function Screen({ children, ...otherProps }) {
  return (
    <SafeAreaView style={styles.screen} {...otherProps}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
