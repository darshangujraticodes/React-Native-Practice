import { Text, View } from "react-native";

const Greet = ({ user }: { user: string }) => {
  return (
    <View>
      <Text
        style={{
          marginTop: 15,
          fontSize: 25,
          color: "white",
          textAlign: "center",
        }}
      >
        Hello, {user}
      </Text>
    </View>
  );
};

export default Greet;
