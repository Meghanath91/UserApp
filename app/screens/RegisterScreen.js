import React from "react";
import { StyleSheet, Image } from "react-native";

import * as Yup from "yup";

import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import Screen from "../components/Screen";
import SubmitButton from "../components/forms/SubmitButton";
// import ImageInput from "../components/ImageInput";
// import AppText from "../components/AppText";
import colors from "../config/colors";
import FormImagePicker from "../components/forms/FormImagePicker";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  address: Yup.string().required().label("Address"),
  images: Yup.array().min(1, "please add a profile pic"),
});

export default function RegisterScreen() {
  // const [imageUri, setImageUri] = useState();
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <AppForm
        initialValues={{ email: "", password: "", address: "", images: [] }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
          placeholder="****"
          secureTextEntry
          textContentType="password"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="home-map-marker"
          // keyboardType="address"
          name="address"
          placeholder="Address"
          // textContentType="address"
        />
        <FormImagePicker name="images" />
        {/* <View style={styles.uploadContainer}>
          <AppText style={styles.text}>Upload Profile Picture</AppText>
          <ImageInput
            imageUri={imageUri}
            onChangeImage={(uri) => setImageUri(uri)}
          />
        </View> */}
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
    marginTop: 40,
    marginBottom: 20,
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
