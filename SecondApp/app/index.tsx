import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import FlexBoxTest from "./components/FlexBoxTest";
import HomeFlexBox from "./components/HomeFlexBox";
import HomeResponsiveDevice from "./components/HomeResponsiveDevice";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      {/* <HomeFlexBox /> */}
      <HomeResponsiveDevice />
    </View>
  );
}
