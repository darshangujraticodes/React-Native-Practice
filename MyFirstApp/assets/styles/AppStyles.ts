import { StyleSheet } from "react-native";

/*

Note :
1] React Native is Unitless it does require px, rem, em but it allows %

2] Applying BorderRadius to Text will apply for android but not for ios so always wrap text in view and apply border radius. 

3] Box shadow is applicable to ios but not for android app but to apply box shadow in android use elevation only shadowColor apply to both

4] Style inheritance is limited in app here we can only inherit parent css to child only with inside Text tag
eg. View has text tag so parent view component style will not be implemented in child text component
eg. but if text has child text component then child text can will inherit parent style


5] While applying css it works in 2 types : main axis and cross axis 
in web main axis is horizontal(left to right) and cross axis is vertical(top to bottom)
in mobile main axis is vertical (top to bottom) and cross axis is horizontal (left to right)
due to which justify-content align content center in height perspective and alignItems in width perpective


in web we have to define display : flex but in mobile it is by default

*/

export const appStyle = StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 600,
    color: "#262626",
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

  boxText: { color: "#262626", fontSize: 25, fontWeight: "600" },

  contentCenter: {
    display: "flex",
    // justifyContent: "center", // vertical alignment center
    alignItems: "center", // horizontal alignment center
    borderWidth: 1, // thickness of the border
    borderColor: "#262626", // border color
    borderRadius: 8,
    marginTop: 10,
    padding: 10,
    width: "100%",
  },

  boxShadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
  },

  androidShadow: {
    elevation: 6,
  },

  shadowBox1: {
    width: 120,
    height: 120,
    backgroundColor: "cyan",
    borderRadius: 10,
  },

  onPressButton: {
    backgroundColor: "tomato",
    color: "#ffffff",
    padding: 10,
    marginTop: 10,
    fontSize: 18,
    borderRadius: 10,
    textAlign: "center",
  },
});
