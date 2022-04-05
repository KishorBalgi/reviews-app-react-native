import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontFamily: "Bungee_400Regular",
    fontSize: 20,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderColor: "#eee",
    borderWidth: 2,
    padding: 10,
    marginVertical: 5,
    borderRadius: 6,
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginVertical: 5,
    fontWeight: "bold",
  },
});
