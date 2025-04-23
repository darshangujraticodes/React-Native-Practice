import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import FlexBoxTest from "./components/FlexBoxTest";
import HomeFlexBox from "./components/HomeFlexBox";
import HomeResponsiveDevice from "./components/HomeResponsiveDevice";
import PlatformApi from "./components/PlatformApi";
import ListComponent from "./components/ListComponent";
import SectionListComponent from "./components/SectionListComponent";
import NativeForms from "./components/NativeForms";
import LoginForm from "./components/LoginForm";
import CrudNetworking from "./components/CrudNetworking";
import NativeNavigation from "./components/NativeNavigation";

import { NavigationContainer } from "@react-navigation/native";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 5,
        paddingVertical: 10,

        // justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <ScrollView>
        {/* <HomeFlexBox />
        <HomeResponsiveDevice />

        <PlatformApi />
        <ListComponent />

        <SectionListComponent />

        <NativeForms />

        <LoginForm /> */}
      </ScrollView>

      <CrudNetworking />
    </SafeAreaView>
  );
}
