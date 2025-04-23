import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/Screens/HomeScreen";
import AboutScreen from "@/Screens/AboutScreen";
import ContactScreen from "@/Screens/ContactScreen";

const Stack = createNativeStackNavigator();

export default function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
}
