import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  Pressable,
} from "react-native";

import CustomButton from "./CustomButton/CustomButton";

const PlatformApi = () => {
  return (
    <SafeAreaView style={platfomStyle.safeViewContainer}>
      <View style={platfomStyle.viewContainer}>
        <Text style={platfomStyle.textInfo}>Hello World</Text>

        <CustomButton title="Click Me" />
      </View>
    </SafeAreaView>
  );
};

export default PlatformApi;

const platfomStyle = StyleSheet.create({
  safeViewContainer: {
    flex: 1,
    padding: 8,
    backgroundColor: "white",
  },
  viewContainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: "bisque",
      },
      android: {
        backgroundColor: "mistyrose",
      },
    }),
  },

  textInfo: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: "center",
    marginTop: Platform.OS === "android" ? 25 : 0,
  },
});
