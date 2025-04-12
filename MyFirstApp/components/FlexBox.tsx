import { View, Text, StyleProp, ViewStyle, StyleSheet } from "react-native";

type BoxType = {
  children: React.ReactNode;
  styleProp?: StyleProp<ViewStyle>;
};

const FlexBox = ({ children, styleProp }: BoxType) => {
  return (
    <View style={[BoxStyles.BoxView, styleProp]}>
      <Text style={BoxStyles.BoxText}>{children}</Text>
    </View>
  );
};

export default FlexBox;

// Styles

const BoxStyles = StyleSheet.create({
  BoxView: {
    width: "100%",
    height: 100,
    padding: 8,
    // margin: 2,
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: 10,
  },
  BoxText: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: "white",
  },
});
