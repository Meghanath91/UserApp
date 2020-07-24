import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

//default and generic styles stored in this obj
export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
