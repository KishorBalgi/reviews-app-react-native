import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  function openMenu() {
    navigation.openDrawer();
  }
  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.menu}
      />
      <View style={styles.headerContent}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.logo}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    fontFamily: "Bungee_400Regular",
  },
  menu: {
    position: "absolute",
    left: 10,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    height: 30,
    width: 30,
    marginHorizontal: 10,
  },
});
