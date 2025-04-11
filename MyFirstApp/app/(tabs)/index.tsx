import Greet from "@/components/Greet";
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
} from "react-native";

const logoImg1 = require("../../assets/images/pic1.jpg");
const logoImg2 = require("../../assets/images/pic2.jpg");
const logoImg3 = require("../../assets/images/pic3.jpg");

export default function HomeScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isStatusBarVisible, setIsStatusBarVisible] = useState(true);

  return (
    <View style={{ flex: 1, backgroundColor: "#262626", padding: 20 }}>
      <StatusBar
        backgroundColor="#f5f5f5"
        barStyle="dark-content"
        hidden={isStatusBarVisible}
      />

      <ScrollView>
        <Text style={{ fontSize: 20, fontWeight: 600, color: "#f5f5f5" }}>
          View Tag Card Creation
        </Text>
        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: "#f5f5f5",
            marginVertical: 10,
            borderRadius: 10,
          }}
        ></View>

        <Text
          style={{
            fontSize: 20,
            marginTop: 20,
            fontWeight: 600,
            color: "#f5f5f5",
          }}
        >
          Display local Image file
        </Text>
        <Image
          source={logoImg1}
          style={{
            width: 300,
            height: 300,
            marginVertical: 10,
            borderRadius: 10,
          }}
        />

        <Text
          style={{
            fontSize: 20,
            marginTop: 20,
            fontWeight: 600,
            color: "#f5f5f5",
          }}
        >
          Display Image from API URL
        </Text>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={{
            width: 300,
            height: 300,
            marginVertical: 10,
            borderRadius: 10,
          }}
        />

        <Text
          style={{
            fontSize: 20,
            marginTop: 20,
            fontWeight: 600,
            color: "#f5f5f5",
          }}
        >
          Display Text Over Image
        </Text>

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
          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
              fontWeight: 600,
              color: "#f5f5f5",
            }}
          >
            Button Tag
          </Text>

          <Button
            title="Click Me! "
            // disabled
            color="coral"
            onPress={() => console.log("Button is Clicked!")}
          />
        </View>

        <View>
          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
              fontWeight: 600,
              color: "#f5f5f5",
            }}
          >
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
          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
              fontWeight: 600,
              color: "#f5f5f5",
            }}
          >
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
                onPress()
              </Text>
            </Pressable>

            <Pressable
              style={{ width: "45%" }}
              onPressIn={() => {
                console.log("OnPressIn | Text Pressed");
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
                onPressIn()
              </Text>
            </Pressable>

            <Pressable
              style={{ width: "45%" }}
              onPressOut={() => {
                console.log("OnPressOut | Text Pressed");
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
                onPressOut()
              </Text>
            </Pressable>

            <Pressable
              style={{ width: "45%" }}
              onLongPress={() => {
                console.log("onLongPress | Text Pressed");
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
                onLongPress()
              </Text>
            </Pressable>
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
              fontWeight: 600,
              color: "#f5f5f5",
            }}
          >
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
          ></View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
              fontWeight: 600,
              color: "#f5f5f5",
            }}
          >
            ReactNative Modal Popup
          </Text>

          <Pressable
            style={{ width: "50%" }}
            onPress={() => {
              console.log("Show Modal ");
              setIsModalVisible(true);
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
              Open Popup Modal
            </Text>
          </Pressable>

          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
              fontWeight: 600,
              color: "#f5f5f5",
            }}
          >
            StatusBar Visibility
          </Text>

          <Pressable
            style={{ width: "50%" }}
            onPress={() => {
              setIsStatusBarVisible(!isStatusBarVisible);
              console.log(isStatusBarVisible);
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
              {!isStatusBarVisible ? " Hide Statusbar " : " Show Statusbar "}
            </Text>
          </Pressable>
        </View>

        <View>
          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
              fontWeight: 600,
              color: "#f5f5f5",
            }}
          >
            Activity Indicator | Content Loader:
          </Text>
          <ActivityIndicator size="large" color="#ffffff" animating={true} />
        </View>

        <View>
          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
              fontWeight: 600,
              color: "#f5f5f5",
            }}
          >
            Alert Component
          </Text>

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
              Alert Popup
            </Text>
          </Pressable>
        </View>

        <View>
          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
              fontWeight: 600,
              color: "#f5f5f5",
            }}
          >
            Custom Component
          </Text>
          <Greet user="Darshan Gujrati" />
        </View>
      </ScrollView>

      {/* By default modal visible is true and animation type is none */}

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
