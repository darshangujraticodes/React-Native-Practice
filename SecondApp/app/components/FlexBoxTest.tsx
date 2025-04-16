import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

type FlexBoxPropType = {
  children: React.ReactNode;
  style: StyleProp<ViewStyle>;
};

const FlexBoxTest = ({ children, style }: FlexBoxPropType) => {
  return (
    <View style={[BoxStyle.boxContainer, style]}>
      <Text> {children} </Text>
    </View>
  );
};

export default FlexBoxTest;

const BoxStyle = StyleSheet.create({
  boxContainer: {
    padding: 10,
    // borderRadius: 5,
    // marginVertical: 2,

    width: 150,
    height: 60,
  },
});
