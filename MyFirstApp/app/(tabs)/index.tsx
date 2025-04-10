import { Image, View, Text, ScrollView } from "react-native";

const logoImg1 = require("../../assets/images/pic1.jpg");

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#262626", padding: 20 }}>
      <ScrollView>
        <Text style={{ fontSize: 20, fontWeight: 600, color: "#f5f5f5" }}>
          View Tag Shape Creation
        </Text>
        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: "#f5f5f5",
            marginVertical: 10,
            borderRadius: 10,
          }}
        ></View>

        <Text
          style={{
            fontSize: 20,
            marginTop: 20,
            fontWeight: 600,
            color: "#f5f5f5",
          }}
        >
          Display local Image file
        </Text>
        <Image
          source={logoImg1}
          style={{
            width: 300,
            height: 300,
            marginVertical: 10,
            borderRadius: 10,
          }}
        />

        <Text
          style={{
            fontSize: 20,
            marginTop: 20,
            fontWeight: 600,
            color: "#f5f5f5",
          }}
        >
          Display Image from API URL
        </Text>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={{
            width: 300,
            height: 300,
            marginVertical: 10,
            borderRadius: 10,
          }}
        />
      </ScrollView>
    </View>
  );
}
