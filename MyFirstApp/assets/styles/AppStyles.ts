import { StyleSheet } from "react-native";

export const appStyle = StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 600,
    color: "#f5f5f5",
  },

  box: {
    marginTop: 10,
    width: "100%",
    height: 150,
    padding: 10,
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  darkvioletBg: {
    backgroundColor: "darkviolet",
  },
  deeppinkBg: {
    backgroundColor: "deeppink",
  },

  boxText: { color: "white", fontSize: 25, fontWeight: "600" },
});
