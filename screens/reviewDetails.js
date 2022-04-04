import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../components/card";

export default function ReviewDetails({ navigation }) {
  function createRating(n) {
    const imgs = [];
    for (let i = 0; i < n; i++) {
      imgs.push(<Image source={require("../assets/rating-1.png")} key={i} />);
    }
    return imgs;
  }
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.title}>{navigation.getParam("title")}</Text>
        <Text style={styles.body}>{navigation.getParam("body")}</Text>
        <View style={styles.rating}>
          {createRating(navigation.getParam("rating"))}
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 5,
  },
});
