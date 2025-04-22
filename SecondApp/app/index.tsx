import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import FlexBoxTest from "./components/FlexBoxTest";
import HomeFlexBox from "./components/HomeFlexBox";
import HomeResponsiveDevice from "./components/HomeResponsiveDevice";
import PlatformApi from "./components/PlatformApi";
import ListComponent from "./components/ListComponent";
import SectionListComponent from "./components/SectionListComponent";
import NativeForms from "./components/NativeForms";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 8 }}>
      <ScrollView>
        {/* <HomeFlexBox />
      <HomeResponsiveDevice /> */}

        {/* <PlatformApi /> */}
        {/* <ListComponent /> */}

        {/* <SectionListComponent /> */}

        <NativeForms />
      </ScrollView>
    </SafeAreaView>
  );
}
