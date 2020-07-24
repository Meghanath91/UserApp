import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { StyleSheet, View, Dimensions } from "react-native";

import colors from "../config/colors";
import useAuth from "../hooks/useAuth";

//to display user's registered location
export default function LocationDetailsScreen() {
  const { user, logOut } = useAuth();
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const getLocation = async () => {
    const { granted } = await Location.requestPermissionsAsync();
    if (!granted) return;
    const result = await Location.geocodeAsync(user.address);

    setLongitude(result[0].longitude);
    setLatitude(result[0].latitude);
  };
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <View style={styles.container}>
      {longitude && latitude ? (
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
            pinColor={colors.primary} // any color
            title={user.address}
          />
        </MapView>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
