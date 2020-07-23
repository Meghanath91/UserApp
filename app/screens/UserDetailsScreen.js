import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";

function UserDetailsScreen({ userName, image }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/profile-pic.jpg")}
      />

      <View>
        <AppText style={styles.title}>Meghanath</AppText>
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
});
export default UserDetailsScreen;
