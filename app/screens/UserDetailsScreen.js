import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import authStorage from "../auth/storage";
import useAuth from "../hooks/useAuth";
function UserDetailsScreen() {
  const { user, setUser } = useAuth;
  const handleLogOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: user.image }} />

      <View>
        <AppText style={styles.title}>{user.email}</AppText>
      </View>
      <View style={styles.logout}>
        <AppButton title="LOGOUT" onPress={handleLogOut} />
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
    fontSize: 30,
    color: colors.primary,
  },
  logout: {
    alignSelf: "center",
    width: 200,
    marginVertical: 70,
  },
});
export default UserDetailsScreen;
