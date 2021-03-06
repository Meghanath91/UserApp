import { Platform } from "react-native";
import colors from "./colors";
export default Object.freeze({
  colors,
  text: {
    color: colors.dark,
    fontSize: 22,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
