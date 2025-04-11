import { Text, View } from "react-native";

const StylesheetComponent = () => {
  return (
    <View
      style={{
        marginTop: 10,
        flex: 1,
        backgroundColor: "plum",
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          padding: 10,
          fontWeight: 600,
          color: "#262626",
        }}
      >
        Stylesheet API
      </Text>
    </View>
  );
};

export default StylesheetComponent;
