import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

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
