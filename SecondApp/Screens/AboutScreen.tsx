import { View, Text, StyleSheet } from "react-native";

const AboutScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>HomeScreen</Text>
    </View>
  );
};

export default AboutScreen;

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
