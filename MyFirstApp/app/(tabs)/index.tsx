import Greet from "@/components/Greet";
import { appStyle } from "@/assets/styles/AppStyles";

import { useState } from "react";
import {
  Image,
  View,
  Text,
  ScrollView,
  ImageBackground,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import FlexBox from "@/components/FlexBox";

const logoImg1 = require("../../assets/images/pic1.jpg");
const logoImg2 = require("../../assets/images/pic2.jpg");
const logoImg3 = require("../../assets/images/pic3.jpg");

export default function HomeScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isStatusBarVisible, setIsStatusBarVisible] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ffff",
        padding: 10,
      }}
    >
      <StatusBar
        backgroundColor="#262626"
        barStyle="light-content"
        hidden={isStatusBarVisible}
      />

      <ScrollView>
        <Text style={appStyle.text}>View Tag Card Creation</Text>
        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: "teal",
            marginVertical: 10,
            borderRadius: 10,
          }}
        ></View>

        <Text style={appStyle.text}>Display local Image file</Text>
        <Image
          source={logoImg1}
          style={{
            width: 300,
            height: 300,
            marginVertical: 10,
            borderRadius: 10,
          }}
        />

        <Text style={appStyle.text}>Display Image from API URL</Text>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={{
            width: 300,
            height: 300,
            marginVertical: 10,
            borderRadius: 10,
          }}
        />

        <Text style={appStyle.text}>Display Text Over Image</Text>

        <View style={{ height: 250, marginVertical: 10 }}>
          <ImageBackground
            source={logoImg2}
            style={{
              flex: 1,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <Text> Shirt 2 </Text>
          </ImageBackground>
        </View>

        <View>
          <Text style={appStyle.text}>Button Tag</Text>

          <Button
            title="Click Me! "
            // disabled
            color="coral"
            onPress={() => console.log("Button is Clicked!")}
          />
        </View>

        <View>
          <Text style={appStyle.text}>
            Pressable Tag : Image & Text Pressable
          </Text>

          <Pressable
            onPress={() => {
              console.log("Image Pressed");
            }}
          >
            <ImageBackground
              source={logoImg3}
              style={{ height: 250, borderRadius: 20, marginTop: 10 }}
            />
          </Pressable>

          <Pressable
            onPress={() => {
              console.log("Text Pressed");
            }}
          >
            <Text style={{ color: "white", marginTop: 10, fontSize: 18 }}>
              Text is Clickable click to Execute function
            </Text>
          </Pressable>
        </View>

        <View>
          <Text style={appStyle.text}>
            Custom Button using Pressable on Text
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              rowGap: 3,
              columnGap: 10,
            }}
          >
            <Pressable
              style={{ width: "45%" }}
              onPress={() => {
                console.log("OnPress | Text Pressed");
              }}
            >
              <Text style={appStyle.onPressButton}>onPress()</Text>
            </Pressable>

            <Pressable
              style={{ width: "45%" }}
              onPressIn={() => {
                console.log("OnPressIn | Text Pressed");
              }}
            >
              <Text style={appStyle.onPressButton}>onPressIn()</Text>
            </Pressable>

            <Pressable
              style={{ width: "45%" }}
              onPressOut={() => {
                console.log("OnPressOut | Text Pressed");
              }}
            >
              <Text style={appStyle.onPressButton}>onPressOut()</Text>
            </Pressable>

            <Pressable
              style={{ width: "45%" }}
              onLongPress={() => {
                console.log("onLongPress | Text Pressed");
              }}
            >
              <Text style={appStyle.onPressButton}>onLongPress()</Text>
            </Pressable>
          </View>
        </View>

        <View>
          <Text style={appStyle.text}>ReactNative Modal Popup</Text>

          <Pressable
            style={{ width: "50%" }}
            onPress={() => {
              console.log("Show Modal ");
              setIsModalVisible(true);
            }}
          >
            <Text style={appStyle.onPressButton}>Open Popup Modal</Text>
          </Pressable>

          <Text style={appStyle.text}>StatusBar Visibility</Text>

          <Pressable
            style={{ width: "50%" }}
            onPress={() => {
              setIsStatusBarVisible(!isStatusBarVisible);
              console.log(isStatusBarVisible);
            }}
          >
            <Text style={appStyle.onPressButton}>
              {!isStatusBarVisible ? " Hide Statusbar " : " Show Statusbar "}
            </Text>
          </Pressable>
        </View>

        <View>
          <Text style={appStyle.text}>
            Activity Indicator | Content Loader:
          </Text>
          <ActivityIndicator size="large" color="#000000" animating={true} />
        </View>

        <View>
          <Text style={appStyle.text}>Alert Component</Text>

          {/* Alert has limit of 3 action button only */}
          <Pressable
            style={{ width: "45%" }}
            onPress={() => {
              // console.log("OnPress | Text Pressed");
              Alert.alert("Alert Title", "Alert Message", [
                {
                  text: "Cancel",
                  onPress: () => {
                    console.log("Cancel is Press!");
                  },
                },
                {
                  text: "Ok",
                  onPress: () => {
                    console.log("Ok is Press!");
                  },
                },
                {
                  text: "Ask Me Later",
                  onPress: () => {
                    console.log("Later is Press!");
                  },
                },
              ]);
            }}
          >
            <Text style={appStyle.onPressButton}>Alert Popup</Text>
          </Pressable>
        </View>

        <View>
          <Text style={appStyle.text}>Custom Component</Text>
          <Greet user="Darshan Gujrati" />
          <Greet user="Rohit Singh" />
        </View>

        <View>
          {/*  Last array value precendence is greater than previuos   */}
          {/* Last style in array will take the precedence or have high priority to overirde previous style   */}
          <Text style={appStyle.text}>Multiple Styles</Text>
          <View style={[appStyle.deeppinkBg, appStyle.box]}>
            <Text style={appStyle.boxText}>Box 1</Text>
          </View>

          <View style={[appStyle.box, appStyle.darkvioletBg]}>
            <Text style={appStyle.boxText}>Box 2</Text>
          </View>
        </View>

        <View>
          <Text style={appStyle.text}>
            React Native Box Model Similar to Web
          </Text>
          <View style={[appStyle.contentCenter]}>
            <Text style={appStyle.boxText}>Margin</Text>
            <View style={[appStyle.contentCenter]}>
              <Text style={appStyle.boxText}>Border</Text>
              <View style={[appStyle.contentCenter]}>
                <Text style={appStyle.boxText}>Padding</Text>
                <View style={[appStyle.contentCenter]}>
                  <Text style={appStyle.boxText}>Content</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View>
          <Text style={appStyle.text}>IOS Box Shadow and Elevation</Text>
          <View
            style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
          >
            <View
              style={[
                appStyle.shadowBox1,
                appStyle.boxShadow,
                appStyle.androidShadow,
              ]}
            ></View>
            <View style={[]}></View>
          </View>
        </View>

        <View>
          <Text style={appStyle.text}>React Native Style : Flexbox</Text>
          <View
            style={{
              marginTop: 10,
              borderWidth: 2,
              flex: 1,
              borderColor: "#262626",
            }}
          >
            <FlexBox styleProp={{ backgroundColor: "blueviolet" }}>
              Box 1
            </FlexBox>

            <FlexBox styleProp={{ backgroundColor: "blue" }}>Box 2</FlexBox>

            <FlexBox styleProp={{ backgroundColor: "tomato" }}>Box 3</FlexBox>

            <FlexBox styleProp={{ backgroundColor: "crimson" }}>Box 4</FlexBox>

            <FlexBox styleProp={{ backgroundColor: "navy" }}>Box 5</FlexBox>

            <FlexBox styleProp={{ backgroundColor: "deeppink" }}>Box 6</FlexBox>
          </View>
        </View>

        <View style={{ marginBottom: 50 }}></View>

        {/* <StylesheetComponent /> */}
      </ScrollView>

      {/* By default modal visible is true and animation type is none */}

      {/* Popup Modal */}

      <Modal
        visible={isModalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View
          style={{ flex: 1, backgroundColor: "darkslategrey", padding: 20 }}
        >
          <Text
            style={{
              fontSize: 22,
              textAlign: "center",
              fontWeight: 600,
              color: "white",
            }}
          >
            Modal Header
          </Text>
          <Text style={{ color: "white", marginTop: 10, fontSize: 17 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            consequuntur eum officiis deleniti dolores minus labore aut placeat
            cumque tempore. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Veritatis consequuntur eum officiis deleniti dolores minus
            labore aut placeat cumque tempore.
          </Text>

          <View
            style={{ display: "flex", alignItems: "center", marginTop: 15 }}
          >
            <Pressable
              style={{ width: "50%" }}
              onPress={() => {
                console.log("Close Modal ");
                setIsModalVisible(false);
              }}
            >
              <Text
                style={{
                  backgroundColor: "mintcream",
                  color: "#262626",
                  padding: 10,
                  marginTop: 10,
                  fontSize: 18,
                  borderRadius: 10,
                  textAlign: "center",
                }}
              >
                Close Popup Modal
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
