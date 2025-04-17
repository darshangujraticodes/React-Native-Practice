import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";

const PlatformApi = () => {
  return (
    <SafeAreaView style={platfomStyle.safeViewContainer}>
      <View style={platfomStyle.viewContainer}>
        <Text style={platfomStyle.textInfo}>Hello World</Text>
      </View>
    </SafeAreaView>
  );
};

export default PlatformApi;

const platfomStyle = StyleSheet.create({
  safeViewContainer: {
    flex: 1,
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
