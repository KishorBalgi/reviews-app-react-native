import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>
        A simple reviews app built as part of a react-native YouTube course.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 18, color: "#000" },
});
