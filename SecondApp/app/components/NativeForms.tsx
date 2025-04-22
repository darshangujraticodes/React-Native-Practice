import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const NativeForms = () => {
  const [name, setName] = useState("");

  return (
    <View style={{}}>
      <Text style={formStyle.pagetitle}>React Native Forms</Text>

      <Text style={{ fontSize: 20, marginTop: 25 }}> Welcome, {name}</Text>

      <View>
        <TextInput
          style={formStyle.inputText}
          onChangeText={setName}
          value={name}
          placeholder="Enter Your Name"
          autoCorrect={false}
          autoCapitalize="none"
        />

        <TextInput
          style={formStyle.inputText}
          placeholder="Enter Your Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          style={formStyle.inputText}
          placeholder="Enter Your Contact number"
          keyboardType="numeric"
        />

        <TextInput
          style={[formStyle.inputText, formStyle.multilineInput]}
          placeholder="Enter Your Address"
          multiline
        />

        <TextInput
          style={formStyle.inputText}
          placeholder="Enter Your Password"
          secureTextEntry
        />

        {/* multi line input */}
      </View>
    </View>
  );
};

export default NativeForms;

const formStyle = StyleSheet.create({
  pagetitle: {
    textAlign: "center",
    fontSize: 26,
    paddingTop: 25,
    fontWeight: 600,
  },

  inputText: {
    fontSize: 20,
    borderWidth: 1,
    paddingHorizontal: 8,
    borderColor: "#262626",
    marginTop: 20,
    borderRadius: 10,
    height: 50,
  },

  multilineInput: {
    minHeight: 90,
    // Note Multiline input text wrap input text in top in iOS and center in android so use below
    textAlignVertical: "top",
  },
});
