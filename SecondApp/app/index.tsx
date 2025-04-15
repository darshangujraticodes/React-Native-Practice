import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import FlexBoxTest from "./components/FlexBoxTest";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[appStyle.container]}>
          <FlexBoxTest style={{ backgroundColor: "aqua" }}>Box 1</FlexBoxTest>
          <FlexBoxTest style={{ backgroundColor: "bisque" }}>Box 2</FlexBoxTest>
          <FlexBoxTest style={{ backgroundColor: "paleturquoise" }}>
            Box 3
          </FlexBoxTest>
          <FlexBoxTest style={{ backgroundColor: "palevioletred" }}>
            Box 4
          </FlexBoxTest>
          {/* <FlexBoxTest
            style={{ backgroundColor: "chocolate", alignSelf: "auto" }}
          >
            Box 5
          </FlexBoxTest> */}
          {/* <FlexBoxTest style={{ backgroundColor: "salmon" }}>Box 6</FlexBoxTest> */}
        </View>
      </SafeAreaView>
    </View>
  );
}

export const appStyle = StyleSheet.create({
  container: {
    borderColor: "#262626",
    borderWidth: 3,
    marginHorizontal: 5,

    flex: 1,
    // flexDirection: "column",
    // by default justify-content work on the column axis / main axis / y axis / vertical axis
    // justifyContent: "center",
    // by default works on the row axis / cross axis / x axis / horizontal axis

    // alignItems: "center",
  },
});
