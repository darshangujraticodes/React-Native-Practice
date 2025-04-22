import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  Pressable,
  Image,
  KeyboardAvoidingView,
} from "react-native";

type ErrorType = {
  username?: string;
  password?: string;
};

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<ErrorType>({});

  const formImg = require("@/assets/images/adaptive-icon.png");

  const validateForm = (): boolean => {
    let errorText: ErrorType = {};
    if (!username) errorText.username = "Username is Required!";
    if (!password) errorText.password = "Password is Required!";

    setErrors(errorText);

    return Object.keys(errorText).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form Submitted Successfully!", username, password);
      setUsername("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 80}
      style={loginStyles.loginContainer}
    >
      <View style={loginStyles.formWrap}>
        <View>
          <Image source={formImg} style={loginStyles.formImg} />
        </View>
        <View>
          <Text style={loginStyles.labelText}>Username</Text>
          <TextInput
            style={loginStyles.inputText}
            placeholder="Enter Your Username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
          />
          {errors.username ? (
            <Text style={loginStyles.errorText}> {errors.username} </Text>
          ) : null}
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={loginStyles.labelText}>Password</Text>
          <TextInput
            style={loginStyles.inputText}
            placeholder="Enter Your Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
          />
          {errors.password ? (
            <Text style={loginStyles.errorText}> {errors.password} </Text>
          ) : null}
        </View>
        <View>
          <Pressable onPress={handleSubmit}>
            <Text style={loginStyles.loginButton}>Login</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;

const loginStyles = StyleSheet.create({
  loginContainer: {
    // flex: 1,
    // justifyContent: "center",
  },
  formWrap: {
    borderWidth: 1,
    padding: 8,
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: "white",
    ...Platform.select({
      ios: {
        shadowOffset: { width: 3, height: 3 },
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 7,
      },
    }),
  },
  labelText: {
    marginBottom: 10,
    fontSize: 17,
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
    fontSize: 20,
    paddingHorizontal: 8,
  },
  loginButton: {
    backgroundColor: "crimson",
    color: "white",
    marginTop: 15,
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: 600,
    borderRadius: 10,
  },
  formImg: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginVertical: 20,
  },
  errorText: {
    fontSize: 15,
    color: "red",

    marginTop: 5,
  },
});
