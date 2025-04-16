import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const HomeResponsiveDevice = () => {
  return (
    <View style={deviceStyle.container}>
      <View style={deviceStyle.boxView}>
        <Text style={deviceStyle.boxText}>Responsive Device Text</Text>{" "}
      </View>
    </View>
  );
};

export default HomeResponsiveDevice;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const deviceStyle = StyleSheet.create({
  container: {
    backgroundColor: "plum",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  boxView: {
    width: windowWidth > 500 ? "70%" : "80%",
    height: windowHeight > 600 ? "40%" : "90%",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  boxText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: windowWidth > 500 ? 20 : 18,
  },
});
