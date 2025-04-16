import React from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import FlexBoxTest from "./FlexBoxTest";

const HomeFlexBox = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[appStyle.container]}>
          <FlexBoxTest style={{ backgroundColor: "aqua", top: 20, left: 20 }}>
            Box 1
          </FlexBoxTest>
          <FlexBoxTest style={{ backgroundColor: "bisque" }}>Box 2</FlexBoxTest>
          <FlexBoxTest style={{ backgroundColor: "paleturquoise" }}>
            Box 3
          </FlexBoxTest>
          <FlexBoxTest style={{ backgroundColor: "palevioletred" }}>
            Box 4
          </FlexBoxTest>
          <FlexBoxTest
            style={{
              backgroundColor: "darkseagreen",
              position: "absolute",
              top: 20,
              right: 20,
            }}
          >
            Box 5
          </FlexBoxTest>
          <FlexBoxTest style={{ backgroundColor: "cornflowerblue" }}>
            Box 6
          </FlexBoxTest>
          <FlexBoxTest
            style={{ backgroundColor: "darkorange", top: 20, left: 20 }}
          >
            Box 7
          </FlexBoxTest>
          <FlexBoxTest style={{ backgroundColor: "gainsboro" }}>
            Box 8
          </FlexBoxTest>
          <FlexBoxTest style={{ backgroundColor: "lightcoral" }}>
            Box 9
          </FlexBoxTest>
          <FlexBoxTest
            style={{
              backgroundColor: "plum",
              position: "absolute",
              bottom: 20,
              right: 20,
            }}
          >
            Box 10
          </FlexBoxTest>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeFlexBox;

export const appStyle = StyleSheet.create({
  container: {
    borderColor: "#262626",
    borderWidth: 3,
    marginHorizontal: 5,

    flex: 1,

    // by default justify-content work on the column axis / main axis / y axis / vertical axis
    // justifyContent: "center",
    // by default works on the row axis / cross axis / x axis / horizontal axis

    // alignItems: "center",
    // justifyContent: "center",
    // flexDirection: "row",

    // note aligncontent only usedful in multiple child items and it should have flex:wrap it only works with wrap
    // work on cross axis similar to alignItems

    // flexWrap: "wrap",

    // flexDirection: "row",
    alignItems: "flex-start",
    // alignContent: "flex-start",

    // height: 200,
    // width: 250,
  },
});
