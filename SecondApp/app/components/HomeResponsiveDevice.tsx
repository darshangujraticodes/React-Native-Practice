import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
} from "react-native";

const HomeResponsiveDevice = () => {
  // old device dimension finding methods

  //   const [dimension, setDimension] = useState({
  //     window: Dimensions.get("window"),
  //   });

  //   useEffect(() => {
  //     const responsiveDevice = Dimensions.addEventListener(
  //       "change",
  //       ({ window }) => {
  //         setDimension({ window });
  //       }
  //     );

  //     return () => responsiveDevice?.remove();
  //   });

  //   const { window } = dimension;
  //   const windowWidth = window.width;
  //   const windowHeight = window.height;

  //   newMethod

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <View style={deviceStyle.container}>
      <View
        style={[
          deviceStyle.boxView,
          {
            width: windowWidth > 400 ? "70%" : "80%",
            height: windowHeight > 600 ? "50%" : "80%",
          },
        ]}
      >
        <Text
          style={[
            deviceStyle.boxText,
            { fontSize: windowWidth > 500 ? 35 : 20 },
          ]}
        >
          Responsive Device Text
        </Text>{" "}
      </View>
    </View>
  );
};

export default HomeResponsiveDevice;

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

// console.log("width =", windowWidth, " | height = ", windowHeight);

const deviceStyle = StyleSheet.create({
  container: {
    backgroundColor: "plum",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  boxView: {
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  boxText: {
    textAlign: "center",
    marginTop: 20,
    // fontSize: windowWidth > 500 ? 35 : 20,
  },
});
