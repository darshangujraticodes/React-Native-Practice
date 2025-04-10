import {
  Image,
  View,
  Text,
  ScrollView,
  ImageBackground,
  Button,
  Pressable,
} from "react-native";

const logoImg1 = require("../../assets/images/pic1.jpg");
const logoImg2 = require("../../assets/images/pic2.jpg");
const logoImg3 = require("../../assets/images/pic3.jpg");

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#262626", padding: 20 }}>
      <ScrollView>
        <Text style={{ fontSize: 20, fontWeight: 600, color: "#f5f5f5" }}>
          View Tag Shape Creation
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
            style={{ padding: 10, borderRadius: 10, marginTop: 20 }}
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
      </ScrollView>
    </View>
  );
}
