import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{navigation.getParam("title")}</Text>
      <Text style={globalStyles.title}>{navigation.getParam("rating")}</Text>
      <Text style={globalStyles.title}>{navigation.getParam("body")}</Text>
    </View>
  );
}
