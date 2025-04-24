import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/Screens/HomeScreen";
import AboutScreen from "@/Screens/AboutScreen";
import ContactScreen from "@/Screens/ContactScreen";
import { NavigationContainer } from "@react-navigation/native";

export default function NativeNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <Text>Navigation Test</Text>
    </View>
  );
}
