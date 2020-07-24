import React from "react";
import { StyleSheet, View } from "react-native";

import ImageInput from "./ImageInput";
//to habdle delete and add image
export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <ImageInput
          imageUri={uri}
          key={uri}
          onChangeImage={() => onRemoveImage(uri)}
        />
      ))}
      {imageUris.length === 1 ? null : (
        <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
