import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import useAuth from "../hooks/useAuth";

//render username and profile pic
function UserDetailsScreen() {
  const { user, logOut } = useAuth();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: user.image }} />
      <View>
        <AppText style={styles.title}>{user.email}</AppText>
      </View>
      <View style={styles.logout}>
        <AppButton title="LOGOUT" onPress={logOut} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  image: {
    alignSelf: "center",
    marginVertical: 30,
    width: 200,
    height: 200,
    borderRadius: 100,
    marginRight: 10,
    overflow: "hidden",
  },

  title: {
    alignSelf: "center",
    fontWeight: "700",
    fontSize: 15,
    color: colors.primary,
  },
  logout: {
    alignSelf: "center",
    width: 200,
    marginVertical: 70,
  },
});
export default UserDetailsScreen;
