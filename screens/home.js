import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "Hello World 1", rating: 5, body: "lorem epsum", key: "1" },
    { title: "Hello World 2", rating: 3, body: "lorem epsum", key: "2" },
    { title: "Hello World 3", rating: 4, body: "lorem epsum", key: "3" },
    { title: "Hello World 4", rating: 1, body: "lorem epsum", key: "4" },
    { title: "Hello World 5", rating: 2, body: "lorem epsum", key: "5" },
  ]);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", item)}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
