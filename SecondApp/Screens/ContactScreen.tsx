import { View, Text, StyleSheet } from "react-native";

const ContactScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>HomeScreen</Text>
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
  },
});
