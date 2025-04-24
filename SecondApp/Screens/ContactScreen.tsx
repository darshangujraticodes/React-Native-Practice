import { View, Text, StyleSheet } from "react-native";

const ContactScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Contact Screen</Text>
    </View>
  );
};

export default ContactScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: 600,
    marginTop: 50,
  },
});
