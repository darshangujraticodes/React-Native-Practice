import { appStyle } from "@/assets/styles/AppStyles";
import { Text, View } from "react-native";

const Greet = ({ user }: { user: string }) => {
  return (
    <View>
      <Text style={appStyle.text}>Hello, {user}</Text>
    </View>
  );
};

export default Greet;
