import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/home";
import AppLoading from "expo-app-loading";
import { useFonts, Bungee_400Regular } from "@expo-google-fonts/bungee";
import Navigator from "./routes/drawer";

export default function App() {
  const [fontsLoaded] = useFonts({ Bungee_400Regular });
  if (!fontsLoaded) return <AppLoading />;
  return <Navigator />;
}
