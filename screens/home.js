import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../components/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "../components/reviewForm";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: "Hello World 1", rating: 5, body: "lorem epsum", key: "1" },
    { title: "Hello World 2", rating: 3, body: "lorem epsum", key: "2" },
    { title: "Hello World 3", rating: 4, body: "lorem epsum", key: "3" },
    { title: "Hello World 4", rating: 1, body: "lorem epsum", key: "4" },
    { title: "Hello World 5", rating: 2, body: "lorem epsum", key: "5" },
  ]);
  function addReviews(data) {
    data.key = Math.random().toString();
    setReviews((curr) => [data, ...curr]);
    setModalOpen(false);
  }
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              style={styles.btnClose}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReviews={addReviews} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        style={styles.btnAdd}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", item)}
          >
            <Card>
              <Text style={styles.title}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "300",
    fontFamily: "Bungee_400Regular",
  },
  modalContent: { flex: 1 },
  btnAdd: {
    fontSize: 35,
    backgroundColor: "#FFAD5B",
    width: 50,
    height: 50,
    textAlign: "center",
    borderRadius: 50,
    paddingVertical: 7,
    alignSelf: "center",
    marginVertical: 10,
  },
  btnClose: {
    marginVertical: 10,
    textAlign: "right",
    marginRight: 10,
    fontSize: 30,
  },
});
