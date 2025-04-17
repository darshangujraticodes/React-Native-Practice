# React Native Notes

Every device has 2 Axis (Main Axis and Cross Axis)

1. In Website main axis is horizontal and cross axis is vertical axis which is perpendicular to main axis.
2. But in React Native App it is Opposite Main Axis is Vertical and cross axis is horizontal due to which in default flex direction is column in react native

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
2. second chnage `app.json` config setting from `orientation : "portrait" to  "orientation": "default"`
