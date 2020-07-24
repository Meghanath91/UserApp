//import dependencies
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { StyleSheet, View, Dimensions } from "react-native";

import colors from "../config/colors";
import useAuth from "../hooks/useAuth";

//to display user's registered location
export default function LocationDetailsScreen() {
  //define hooks
  const { user, logOut } = useAuth();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const getLocation = async () => {
    //user permission request
    const { granted } = await Location.requestPermissionsAsync();
    if (!granted) return; //if no permission exit
    //it will take a string address and return coordinates
    const result = await Location.geocodeAsync(user.address);
    //set values to longitude and latitude
    setLongitude(result[0].longitude);
    setLatitude(result[0].latitude);
  };
  //since we can't pass async function to useEffect declare outside call it here
  useEffect(() => {
    getLocation();
  }, []);

  //conditional rendering to avoid 'undefined'errors
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
            pinColor={colors.primary}
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
