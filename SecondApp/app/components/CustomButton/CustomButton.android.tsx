import { Pressable, Text, View } from "react-native";

const CustomButton = ({ title }: { title: string }) => {
  const clickHandle = () => {
    alert("Android Button Clicked !");
  };

  return (
    <View>
      <Pressable
        onPress={clickHandle}
        style={{
          alignItems: "center",
          marginTop: 25,
          backgroundColor: "indigo",
          paddingHorizontal: 15,
          width: "30%",
          marginHorizontal: "auto",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            padding: 10,
            fontWeight: "600",
          }}
        >
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;
