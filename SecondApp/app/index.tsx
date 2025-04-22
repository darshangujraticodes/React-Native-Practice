import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import FlexBoxTest from "./components/FlexBoxTest";
import HomeFlexBox from "./components/HomeFlexBox";
import HomeResponsiveDevice from "./components/HomeResponsiveDevice";
import PlatformApi from "./components/PlatformApi";
import ListComponent from "./components/ListComponent";
import SectionListComponent from "./components/SectionListComponent";
import NativeForms from "./components/NativeForms";
import LoginForm from "./components/LoginForm";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 8,

        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* <HomeFlexBox />
        <HomeResponsiveDevice /> */}

      {/* <PlatformApi /> */}
      {/* <ListComponent /> */}

      {/* <SectionListComponent /> */}

      {/* <NativeForms /> */}

      <LoginForm />
    </SafeAreaView>
  );
}
