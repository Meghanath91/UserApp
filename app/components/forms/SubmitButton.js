import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";
//custom submit button
export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}
