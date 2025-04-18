import { Platform } from "react-native";

export default Platform.select({
  android: require("./CustomButton.android").default,
  ios: require("./CustomButton.ios").default,
});
