import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup"; //form validation

import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";

import AppText from "../components/AppText";
import colors from "../config/colors";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";

import useApi from "../hooks/useApi";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../hooks/useAuth";

//input validation
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  address: Yup.string().required().label("Address"),
  images: Yup.array().min(1, "please add a profile pic"),
});

export default function RegisterScreen() {
  const auth = useAuth();
  const [error, setError] = useState();
  const loginApi = useApi(authApi.login);
  const registerApi = useApi(usersApi.register);

  //handle form submission
  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo); //to handle POST request
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
      }
      return;
    }

    const { data: authToken } = await loginApi.request(email, password); //to handle redirect
    auth.logIn(authToken);
  };
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <AppForm
        initialValues={{ email: "", password: "", address: "", images: [] }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="john@example.com"
          textContentType="emailAddress"
        />

        <AppFormField
          autoCapitalize="none"
          auotoCorrect={false}
          icon="lock"
          name="password"
          placeholder="password"
          secureTextEntry
          textContentType="password"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="home-map-marker"
          name="address"
          placeholder="Address"
        />
        <View style={styles.uploadContainer}>
          <AppText style={styles.text}>Upload Profile Picture</AppText>
          <FormImagePicker name="images" />
        </View>
        <SubmitButton title="REGISTER" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  uploadContainer: {
    marginVertical: 10,
    padding: 20,
    borderStyle: "dotted",
    borderColor: colors.medium,
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 20,
  },
  text: {
    color: colors.medium,
    fontSize: 18,
  },
});
