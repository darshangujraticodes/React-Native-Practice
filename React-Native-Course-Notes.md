# React Native Notes

Every device has 2 Axis (Main Axis and Cross Axis)

1. In Website main axis is horizontal and cross axis is vertical axis which is perpendicular to main axis.
2. But in React Native App it is Opposite Main Axis is Vertical and cross axis is horizontal due to which in default flex direction is column in react native <br>
   due to which justifyContent style works on main axis (vertical) and alignItems works on cross axis (Horizontal)

### React Native Components

1. `<View>` : Normal Container Wrapper tag similar to div in HTML
2. `<Text` : Text tag help to write Content in it.
3. `<Pressable>` : Help to build custom buttons by wrapping Text tag inside it has onPress(), onPressIn(), onPressOut(), onLongPress() functions.
4. `<SafeAreaView> ` : Help to display content viewable screen portion to prevent content from hiding in different device due to different screen size.
5. `<StatusBar>` : it helps to set the configuration whether to display or not and with background and text color options
6. `<ScrollView>` : To Display long content in scroll options
7. `<Image>` : To Display Image
8. `<ImageBackground>` : To set image in Background
9. `<Modal>` : used to display popup modal by default is value true which overlap content screen window
10. `Alert.alert("Alert Title", "Alert Message",[ three buttons ok, cancel , later])` : Alert box

### Styles

1. React Native is Unitless it does require px, rem, em but it allows %

2. Applying BorderRadius to Text will apply for android but not for ios so always wrap text in view and apply border radius.

3. Box shadow is applicable to ios but not for android app but to apply box shadow in android use elevation only shadowColor apply to both

4. Style inheritance is limited in app here we can only inherit parent css to child only with inside Text tag <br>
   eg. View has text tag so parent view component style will not be implemented in child text component <br>
   eg. but if text has child text component then child text can will inherit parent style <br>

5. While applying css it works in 2 types : main axis and cross axis <br>
   in web main axis is horizontal(left to right) and cross axis is vertical(top to bottom) <br>
   in mobile main axis is vertical (top to bottom) and cross axis is horizontal (left to right) <br>
   due to which justify-content align content center in height perspective and alignItems in width perpective <br>

6. Box Shadow only works for iOS and for android use elevation

### To make Code Responsive for all device use `useWindowDimensions()` Hook

1. First you have to use useWindowDimension() to fetch current device width and height.
2. second change `app.json` config setting from `orientation : "portrait" to  "orientation": "default"`

### Platform Specific Code Practice

It has 2 implementation methods

1. Platform Module
2. Platform specific file extension

When you want to embed code specificaly for particular platform we use this platform hooks to write that specific code
Code sample : `marginTop: Platform.OS === "android" ? 25 : 0`

### List style

Always use Flatlist becoz it is lazy loaded and save memory and boost performance becoz it
