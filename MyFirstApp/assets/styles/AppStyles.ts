import { StyleSheet } from "react-native";

/*

Note :
1] React Native is Unitless it does require px, rem, em but it allows %

2] Applying BorderRadius to Text will apply for android but not for ios so always wrap text in view and apply border radius. 

3] Box shadow is applicable to ios but not for android app but to apply box shadow in android use elevation only shadowColor apply to both


*/

export const appStyle = StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 600,
    color: "#f5f5f5",
  },

  box: {
    marginTop: 10,
    width: "100%",
    height: 150,
    padding: 10,
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "darkturquoise",
  },

  darkvioletBg: {
    backgroundColor: "darkviolet",
  },
  deeppinkBg: {
    backgroundColor: "deeppink",
  },

  boxText: { color: "white", fontSize: 25, fontWeight: "600" },

  contentCenter: {
    display: "flex",
    // justifyContent: "center", // vertical alignment center
    alignItems: "center", // horizontal alignment center
    borderWidth: 2, // thickness of the border
    borderColor: "#f5f5f5", // border color
    borderRadius: 8,
    marginTop: 10,
    padding: 10,
    width: "100%",
  },

  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },

  androidShadow: {
    elevation: 10,
  },
});
